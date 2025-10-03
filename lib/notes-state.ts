/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type NotesState = {
  notes: string;
  setNotes: (notes: string) => void;
  appendToNotes: (text: string) => void;
};

export const useNotes = create<NotesState>()(
  persist(
    (set) => ({
      notes: '',
      setNotes: (notes) => set({ notes }),
      appendToNotes: (text) => set((state) => ({
        notes: state.notes ? `${state.notes}\n\n---\n\n${text}` : text,
      })),
    }),
    {
      name: 'study-notes-storage',
    }
  )
);
