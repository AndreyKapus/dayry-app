import CreateNote from "../components/CreateNote";
import Notes from "../components/Notes";
import SideBar from "../components/sideBar";

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <SideBar />
      <div>
        <CreateNote />
        <Notes />
      </div>
    </div>
  );
};

export default MainPage;
