import css from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={css.sideBarContainer}>
      <h1 className={css.title}>dayry app</h1>
      <p className={css.subtitle}>Comment with no sense</p>
    </div>
  );
};

export default SideBar;
