import { useNotes } from "../store/store";

const Notes = () => {
  const myNotes = useNotes((state) => state.notes);
  console.log(myNotes);

  return (
    <div>
      <ul>
        {myNotes &&
          myNotes.map((note, index) => {
            return (
              <li key={index}>
                <p>{note.text}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notes;
