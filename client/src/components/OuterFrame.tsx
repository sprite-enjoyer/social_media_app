import { Outlet, useNavigate } from "react-router-dom";
import HeaderStore from "../classes/HeaderStore";
import LeftSidebarStore from "../classes/LeftSidebarStore";
import styles from "../styles/componentStyles/outerFrame.module.scss";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const OuterFrame = () => {
  const navigate = useNavigate();
  const headerStore = new HeaderStore();
  const leftSidebarStore = new LeftSidebarStore(navigate);

  return (
    <div className={styles["main"]} >
      <Header store={headerStore} />
      <div className={styles["bottom"]} >
        <LeftSidebar leftSidebarStore={leftSidebarStore} />
        <Outlet />
        <RightSidebar />
      </div>
    </div>
  );
};

export default OuterFrame;