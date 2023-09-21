import { useState } from "react";
import { useNotes } from "../../store/store";
import CommentsList from "../CommentsList/CommentsList";

const CreateComments = ({ currentNote }) => {
  const [color, setColor] = useState(null);
  const [text, setText] = useState(null);

  // console.log(currentNote);

  const addComment = useNotes((state) => state.setComment);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "color":
        setColor(value);
        break;

      case "text":
        setText(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    const comment = { noteColor: color, noteText: text };
    e.preventDefault();
    addComment(comment, currentNote);
  };

  return (
    <div>
      <h3>Comments</h3>
      <CommentsList currentNote={currentNote} />
      <form onSubmit={handleSubmit}>
        <input type="color" name="color" onChange={handleChange} />
        <input
          type="text"
          name="text"
          onChange={handleChange}
          placeholder="Type comment here..."
          required=""
        ></input>
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default CreateComments;
