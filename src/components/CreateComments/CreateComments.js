import { useState } from "react";
import { useNotes } from "../../store/store";
import CommentsList from "../CommentsList/CommentsList";
import css from "./CreateComments.module.css";

const CreateComments = ({ currentNote }) => {
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");

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
    setText("");
  };

  return (
    <div className={css.commentsCard}>
      <h3 className={css.commentsTitle}>Comments</h3>
      <CommentsList currentNote={currentNote} />
      <form className={css.commentsForm} onSubmit={handleSubmit}>
        <input
          className={css.colorPicker}
          type="color"
          name="color"
          onChange={handleChange}
          required
        />
        <textarea
          className={css.textInput}
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Type comment here..."
          required
        ></textarea>
        <button className={css.addCommentBtn} type="submit">
          Add New
        </button>
      </form>
    </div>
  );
};

export default CreateComments;
