import { useNotes } from "../store/store";

const Notes = () => {
  const myNotes = useNotes((state) => state.notes);

  const deleteNote = useNotes((state) => state.removeNote);

  const handleDelete = (id) => {
    deleteNote(id);
  };

  return (
    <div>
      <ul>
        {myNotes &&
          myNotes.map((note) => {
            return (
              <li key={note.id}>
                <p>{note.text}</p>
                <button type="button" onClick={() => handleDelete(note.id)}>
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notes;
