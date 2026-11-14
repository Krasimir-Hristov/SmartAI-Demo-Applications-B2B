export type ChatRole = 'user' | 'assistant';

export interface ChatMessageItem {
  id: string;
  role: ChatRole;
  content: string;
}

export type RagEngineMode = 'live' | 'fallback';
