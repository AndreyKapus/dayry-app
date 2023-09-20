import CreateNote from "../components/CreateNote";
import SideBar from "../components/sideBar";

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <SideBar />
      <div>
        <CreateNote />
      </div>
    </div>
  );
};

export default MainPage;
