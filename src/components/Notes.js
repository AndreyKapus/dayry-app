import { useState } from "react";
import { useNotes } from "../store/store";
import CreateComments from "./CreateComments";

const Notes = () => {
  const myNotes = useNotes((state) => state.notes);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log(myNotes);

  const handleItemClick = (note) => {
    setSelectedItem(note);
  };

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
              <li key={note.id} onClick={() => handleItemClick(note)}>
                <p>{note.text}</p>
                <button type="button" onClick={() => handleDelete(note.id)}>
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      <CreateComments currentNote={selectedItem} />
    </div>
  );
};

export default Notes;
