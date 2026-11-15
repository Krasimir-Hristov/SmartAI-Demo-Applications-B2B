'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import type { SupportedLocale } from '@/features/i18n';
import { blobToWavBase64 } from './audioWavEncoder';

interface SpeechRecognitionResultItem {
  transcript: string;
}

interface SpeechRecognitionResultListLike {
  length: number;
  [index: number]: {
    [altIndex: number]: SpeechRecognitionResultItem | undefined;
  };
}

interface SpeechRecognitionEventLike {
  results: SpeechRecognitionResultListLike;
}

interface SpeechRecognitionInstance {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

interface WindowWithSpeech extends Window {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
}

const transcribeResponseSchema = z.object({
  text: z.string(),
  engine: z.enum(['openrouter-audio', 'browser-fallback']).optional(),
});

const LOCALE_SPEECH_MAP: Record<SupportedLocale, string> = {
  de: 'de-DE',
  bg: 'bg-BG',
  en: 'en-US',
  tr: 'tr-TR',
};

interface UseVoiceDictationOptions {
  locale: SupportedLocale;
  errorUnsupported: string;
  errorFailed: string;
  onTranscript: (text: string) => void;
}

interface UseVoiceDictationResult {
  isRecording: boolean;
  isTranscribing: boolean;
  voiceError: string | null;
  toggleRecording: () => Promise<void>;
}

export const useVoiceDictation = ({
  locale,
  errorUnsupported,
  errorFailed,
  onTranscript,
}: UseVoiceDictationOptions): UseVoiceDictationResult => {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const speechRef = useRef<SpeechRecognitionInstance | null>(null);
  const liveSpeechTextRef = useRef('');

  const cleanupTracks = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (speechRef.current) {
      try {
        speechRef.current.stop();
      } catch {
        // Ignore stop errors when recognition already ended
      }
      speechRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      cleanupTracks();
    };
  }, [cleanupTracks]);

  const stopAndTranscribe = useCallback(() => {
    setIsRecording(false);

    if (speechRef.current) {
      try {
        speechRef.current.stop();
      } catch {
        // Ignore speech recognition stop errors
      }
    }

    const recorder = recorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
      return;
    }

    const fallbackText = liveSpeechTextRef.current.trim();
    if (fallbackText) {
      onTranscript(fallbackText);
    }
    cleanupTracks();
  }, [cleanupTracks, onTranscript]);

  const startRecording = useCallback(async () => {
    setVoiceError(null);
    liveSpeechTextRef.current = '';
    chunksRef.current = [];

    const win = window as WindowWithSpeech;
    const SpeechCtor = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!navigator.mediaDevices?.getUserMedia && !SpeechCtor) {
      setVoiceError(errorUnsupported);
      return;
    }

    if (SpeechCtor) {
      try {
        const recognition = new SpeechCtor();
        recognition.lang = LOCALE_SPEECH_MAP[locale];
        recognition.interimResults = true;
        recognition.continuous = true;
        recognition.onresult = (event) => {
          const collected: string[] = [];
          for (let i = 0; i < event.results.length; i += 1) {
            const phrase = event.results[i]?.[0]?.transcript;
            if (phrase) {
              collected.push(phrase);
            }
          }
          liveSpeechTextRef.current = collected.join(' ').trim();
        };
        recognition.onerror = () => {
          // Silent fallback to OpenRouter audio endpoint
        };
        recognition.start();
        speechRef.current = recognition;
      } catch {
        speechRef.current = null;
      }
    }

    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setIsRecording(true);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        const recordedType = recorder.mimeType || 'audio/webm';
        const audioBlob = new Blob(chunksRef.current, { type: recordedType });
        cleanupTracks();
        recorderRef.current = null;

        if (audioBlob.size < 400) {
          const fallback = liveSpeechTextRef.current.trim();
          if (fallback) {
            onTranscript(fallback);
          }
          return;
        }

        setIsTranscribing(true);
        try {
          const wavBase64 = await blobToWavBase64(audioBlob);
          const response = await fetch('/api/transcribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ audioBase64: wavBase64, locale }),
          });

          if (response.ok) {
            const rawJson: unknown = await response.json();
            const parsed = transcribeResponseSchema.safeParse(rawJson);
            const serverText = parsed.success ? parsed.data.text.trim() : '';
            if (serverText) {
              onTranscript(serverText);
              return;
            }
          }

          const browserText = liveSpeechTextRef.current.trim();
          if (browserText) {
            onTranscript(browserText);
          } else {
            setVoiceError(errorFailed);
          }
        } catch {
          const browserText = liveSpeechTextRef.current.trim();
          if (browserText) {
            onTranscript(browserText);
          } else {
            setVoiceError(errorFailed);
          }
        } finally {
          setIsTranscribing(false);
        }
      };

      recorder.start();
      setIsRecording(true);
    } catch {
      cleanupTracks();
      setVoiceError(errorFailed);
    }
  }, [cleanupTracks, errorFailed, errorUnsupported, locale, onTranscript]);

  const toggleRecording = useCallback(async () => {
    if (isTranscribing) {
      return;
    }
    if (isRecording) {
      stopAndTranscribe();
    } else {
      await startRecording();
    }
  }, [isRecording, isTranscribing, startRecording, stopAndTranscribe]);

  return {
    isRecording,
    isTranscribing,
    voiceError,
    toggleRecording,
  };
};
