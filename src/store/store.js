import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export const useNotes = create(
  persist(
    (set, get) => ({
      notes: [],

      setNote: (note) =>
        set((state) => {
          const newNote = {
            id: uuidv4(),
            text: note,
          };
          return {
            notes: [...state.notes, newNote],
          };
        }),
      removeNote: (noteId) =>
        set((state) => {
          return {
            notes: state.notes.filter((note) => note.id !== noteId),
          };
        }),
    }),
    { name: "events-storage", storage: createJSONStorage(() => localStorage) }
  )
);
