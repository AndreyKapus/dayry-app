import { useState } from "react";
import { useNotes } from "../../store/store";
import Notes from "../Notes/Notes";
import css from "./CreateNote.module.css";

const CreateNote = () => {
  const [note, setNote] = useState("");

  const addNote = useNotes((state) => state.setNote);

  const handleChange = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
  };

  return (
    <div>
      <h2 className={css.notesCardTitle}>Items</h2>
      <form className={css.notesForm} onSubmit={handleSubmit}>
        <label className="visually-hidden">Note</label>
        <input
          className={css.notesInput}
          type="text"
          name="note"
          id="note"
          placeholder="Type name here..."
          onChange={handleChange}
          required
        />

        <button className={css.addBtn} type="submit">
          Add new
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
