import { useState } from "react";
import CreateComments from "../../components/CreateComments/CreateComments";
import CreateNote from "../../components/CreateNote/CreateNote";
import Notes from "../../components/Notes/Notes";
import SideBar from "../../components/SideBar/sideBar";
import { useNotes } from "../../store/store";
import css from "./MainPage.module.css";

const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(false);
  const myNotes = useNotes((state) => state.notes);

  console.log(active);

  const handleItemClick = (note) => {
    setSelectedItem(note.id);
    setActive(true);
  };

  const deleteNote = useNotes((state) => state.removeNote);

  const handleDelete = (id) => {
    deleteNote(id);
  };

  return (
    <div className={css.wrapper}>
      <SideBar />
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.noteCard}>
            <CreateNote />
            <Notes
              myNotes={myNotes}
              selectedItem={selectedItem}
              handleItemClick={handleItemClick}
              handleDelete={handleDelete}
              active={active}
            />
          </div>
          <CreateComments currentNote={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
