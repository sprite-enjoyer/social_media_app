import LeftSidebarStore from "../classes/RightSidebarStore";
import styles from "../styles/componentStyles/leftSidebar.module.scss";
import FriendsSvg from "./svg/FriendsSvg";
import HomeSvg from "./svg/HomeSvg";
import ProfileSvg from "./svg/ProfileSvg";
import StarSvg from "./svg/StarSvg";

export interface LeftSidebarProps {
  leftSidebarStore: LeftSidebarStore
}

const LeftSidebar = ({ leftSidebarStore }: LeftSidebarProps) => {

  return (
    <div className={styles["main"]} >
      <HomeSvg.Component {...HomeSvg.notActiveProps} />
      <ProfileSvg.Component {...ProfileSvg.notActiveProps} />
      <StarSvg.Component {...StarSvg.notActiveProps} />
      <FriendsSvg.Component {...FriendsSvg.notActiveProps} />
    </div>
  );

};


export default LeftSidebar;