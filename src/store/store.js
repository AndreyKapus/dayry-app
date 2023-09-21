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
            comments: [],
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
      setComment: (comment, noteId) =>
        set((state) => {
          return {
            notes: state.notes.map((note) =>
              note.id === noteId
                ? { ...note, comments: [...note.comments, comment] }
                : note
            ),
          };
        }),
    }),
    { name: "events-storage", storage: createJSONStorage(() => localStorage) }
  )
);
