// import { useState } from "react";
// import { useNotes } from "../../store/store";
import CreateComments from "../CreateComments/CreateComments";
import "./Notes.css";

const Notes = ({ myNotes, selectedItem, handleItemClick, handleDelete }) => {
  // const [selectedItem, setSelectedItem] = useState(null);
  // const myNotes = useNotes((state) => state.notes);
  // // console.log(myNotes);

  // const handleItemClick = (note) => {
  //   setSelectedItem(note.id);
  // };

  // const deleteNote = useNotes((state) => state.removeNote);

  // const handleDelete = (id) => {
  //   deleteNote(id);
  // };

  return (
    <div className="notes-wrapper">
      <ul>
        {myNotes &&
          myNotes.map((note) => {
            return (
              <li key={note.id} onClick={() => handleItemClick(note)}>
                <p>{note.text}</p>
                <p>{note.comments.length}</p>
                <button type="button" onClick={() => handleDelete(note.id)}>
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      {/* <CreateComments currentNote={selectedItem} /> */}
    </div>
  );
};

export default Notes;
