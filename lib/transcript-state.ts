/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { create } from 'zustand';
import { GroundingChunk } from './genai-live-client';

export type Message = {
  id: string;
  author: 'agent';
  text: string;
  sources?: GroundingChunk[];
};

type TranscriptState = {
  messages: Message[];
  addMessage: (message: Omit<Message, 'id'>) => void;
  appendLastMessage: (textChunk: string) => void;
  addSourcesToLastMessage: (sources: GroundingChunk[]) => void;
  clearTranscript: () => void;
};

export const useTranscript = create<TranscriptState>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, { ...message, id: Math.random().toString(36) }],
  })),
  appendLastMessage: (textChunk) => set((state) => {
    if (state.messages.length === 0) return state;
    const lastMessage = state.messages[state.messages.length - 1];
    if (lastMessage.author === 'agent') {
      const updatedMessage = { ...lastMessage, text: lastMessage.text + textChunk };
      return {
        messages: [...state.messages.slice(0, -1), updatedMessage],
      };
    }
    return state;
  }),
  addSourcesToLastMessage: (sources) => set((state) => {
    if (state.messages.length === 0) return state;
    const lastMessage = state.messages[state.messages.length - 1];
    if (lastMessage.author === 'agent') {
      const updatedMessage = { ...lastMessage, sources: [...(lastMessage.sources || []), ...sources] };
      return {
        messages: [...state.messages.slice(0, -1), updatedMessage],
      };
    }
    return state;
  }),
  clearTranscript: () => set({ messages: [] }),
}));
