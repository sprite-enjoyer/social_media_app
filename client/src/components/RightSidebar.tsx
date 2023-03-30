import RightSidebarStore from "../classes/RightSidebarStore";
import styles from "../styles/componentStyles/rightSidebar.module.scss";

export interface RightSideBarProps {
  store: RightSidebarStore
}

const RightSidebar = ({ store }: RightSideBarProps) => {

  return (
    <div className={styles["main"]} >

    </div>
  );

};


export default RightSidebar;