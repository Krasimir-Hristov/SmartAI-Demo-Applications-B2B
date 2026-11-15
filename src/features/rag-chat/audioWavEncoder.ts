'use client';

interface WindowWithWebkitAudio extends Window {
  webkitAudioContext?: typeof AudioContext;
}

const TARGET_SAMPLE_RATE = 16000;

const writeAsciiToView = (view: DataView, offset: number, text: string): void => {
  for (let i = 0; i < text.length; i += 1) {
    view.setUint8(offset + i, text.charCodeAt(i));
  }
};

const downsampleToMono = (buffer: AudioBuffer, targetRate: number): Float32Array => {
  const sourceRate = buffer.sampleRate;
  const channelData = buffer.getChannelData(0);

  if (sourceRate === targetRate) {
    return channelData;
  }

  const ratio = sourceRate / targetRate;
  const outputLength = Math.max(1, Math.round(channelData.length / ratio));
  const result = new Float32Array(outputLength);

  for (let i = 0; i < outputLength; i += 1) {
    const pos = i * ratio;
    const low = Math.floor(pos);
    const high = Math.min(low + 1, channelData.length - 1);
    const frac = pos - low;
    const lowSample = channelData[low] ?? 0;
    const highSample = channelData[high] ?? lowSample;
    result[i] = lowSample * (1 - frac) + highSample * frac;
  }

  return result;
};

const encodePcmWav = (samples: Float32Array, sampleRate: number): ArrayBuffer => {
  const dataBytes = samples.length * 2;
  const buffer = new ArrayBuffer(44 + dataBytes);
  const view = new DataView(buffer);

  writeAsciiToView(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataBytes, true);
  writeAsciiToView(view, 8, 'WAVE');
  writeAsciiToView(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAsciiToView(view, 36, 'data');
  view.setUint32(40, dataBytes, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i += 1) {
    const rawSample = samples[i] ?? 0;
    const clamped = Math.max(-1, Math.min(1, rawSample));
    const intSample = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
    view.setInt16(offset, Math.round(intSample), true);
    offset += 2;
  }

  return buffer;
};

const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 8192;
  let binary = '';

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const slice = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...slice);
  }

  return window.btoa(binary);
};

export const blobToWavBase64 = async (blob: Blob): Promise<string> => {
  const win = window as WindowWithWebkitAudio;
  const AudioCtx = window.AudioContext || win.webkitAudioContext;
  if (!AudioCtx) {
    throw new Error('Web Audio API is unavailable in this browser.');
  }

  const audioCtx = new AudioCtx();
  try {
    const arrayBuffer = await blob.arrayBuffer();
    const decoded = await audioCtx.decodeAudioData(arrayBuffer);
    const monoSamples = downsampleToMono(decoded, TARGET_SAMPLE_RATE);
    const wavBuffer = encodePcmWav(monoSamples, TARGET_SAMPLE_RATE);
    return arrayBufferToBase64(wavBuffer);
  } finally {
    await audioCtx.close();
  }
};
