import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useNotes = create(
  persist(
    (set, get) => ({
      notes: [],

      setNote: (note) =>
        set((state) => {
          const newNote = {
            text: note,
          };
          return {
            notes: [...state.notes, newNote],
          };
        }),
      //   removeNotes: () => set({ bears: 0 }),
    }),
    { name: "events-storage", storage: createJSONStorage(() => localStorage) }
  )
);
