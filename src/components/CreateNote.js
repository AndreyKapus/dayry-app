import { useState } from "react";
import { useNotes } from "../store/store";

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
      <h2>Items</h2>
      <form onSubmit={handleSubmit}>
        <label className="visually-hidden">Note</label>
        <input
          type="text"
          name="note"
          id="note"
          placeholder="Type name here"
          onChange={handleChange}
          required
        />

        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default CreateNote;
