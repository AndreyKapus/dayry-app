import { useEffect, useState } from "react";
import { useNotes } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import css from "./Comments.module.css";

const CommentsList = ({ currentNote }) => {
  const [selected, setSelected] = useState(null);
  const notes = useNotes((state) => state.notes);

  useEffect(() => {
    const findNoteById = () => {
      const curNote = notes.find((note) => note.id === currentNote);
      setSelected(curNote);
    };
    findNoteById();
  }, [currentNote, notes]);

  return (
    <div>
      {selected &&
        selected.comments.map((comment) => {
          return (
            <div className={css.commentsItem} key={uuidv4()}>
              <div
                style={{
                  backgroundColor: `${comment.noteColor}`,
                  width: "50px",
                  height: "50px",
                }}
              ></div>
              <p className={css.textArea}>{comment.noteText}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CommentsList;
