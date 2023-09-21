import { useEffect, useState } from "react";
import { useNotes } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import css from "./Comments.module.css";

const CommentsList = ({ currentNote }) => {
  const [selected, setSelected] = useState(null);
  const notes = useNotes((state) => state.notes);

  console.log(selected);

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
            <div key={uuidv4()}>
              <div
                style={{
                  backgroundColor: `${comment.noteColor}`,
                  width: "40px",
                  height: "40px",
                }}
              >
                {comment.noteColor}
              </div>
              <p>{comment.noteText}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CommentsList;