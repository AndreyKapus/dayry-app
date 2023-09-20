import { create } from "zustand";

export const useNotes = create((set, get) => ({
  notes: [],

  setNotes: ({ note }) =>
    set((state) => {
      const newNote = {
        text: note,
      };
      return { notes: [...state.notes, newNote] };
    }),
  //   removeNotes: () => set({ bears: 0 }),
}));
