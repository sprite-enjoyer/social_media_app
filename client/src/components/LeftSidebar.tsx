import styles from "../styles/componentStyles/leftSidebar.module.scss";
import FriendsSvg from "./svg/FriendsSvg";
import HomeSvg from "./svg/HomeSvg";
import StarSvg from "./svg/StarSvg";

const LeftSidebar = () => {

  return (
    <div className={styles["main"]} >
      <HomeSvg
        fill2={"black"}
        fill={"rgb(254, 91, 56)"}
        width={"40px"}
        height={"40px"}
        stroke="red"
      />
      <StarSvg
        fill={"rgb(254, 91, 56)"}
        stroke={"black"}
        strokeWidth={2}
        width={"40px"}
        height={"40px"}
      />
      <FriendsSvg
        stroke={"black"}
        strokeWidth={2}
        width={"40px"}
        height={"40px"}
      />
    </div>
  );

};


export default LeftSidebar;