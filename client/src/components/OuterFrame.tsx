import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import HeaderStore from "../classes/HeaderStore";
import RightSidebarStore from "../classes/RightSidebarStore";
import styles from "../styles/componentStyles/outerFrame.module.scss";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export interface OuterFrameProps {

}

const OuterFrame = ({ }: OuterFrameProps) => {
  const headerStore = new HeaderStore();
  const rightSidebarStore = new RightSidebarStore();
  return (
    <div className={styles["main"]} >
      <Header store={headerStore} />
      <div className={styles["bottom"]} >
        <LeftSidebar />
        <Outlet />
        <RightSidebar store={rightSidebarStore} />
      </div>
    </div>
  );
};

export default OuterFrame;