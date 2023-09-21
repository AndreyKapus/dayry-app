import css from "./Notes.module.css";

const Notes = ({ myNotes, selectedItem, handleItemClick, handleDelete }) => {
  return (
    <div className="notes-wrapper">
      <ul>
        {myNotes &&
          myNotes.map((note) => {
            return (
              <li
                className={css.listItem}
                key={note.id}
                onClick={() => handleItemClick(note)}
              >
                <p className={css.noteText}>{note.text}</p>
                <div className={css.infoWrapper}>
                  <p className={css.count}>{note.comments.length}</p>
                  <button type="button" onClick={() => handleDelete(note.id)}>
                    delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notes;
