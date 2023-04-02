import { observer } from "mobx-react";
import { useMemo } from "react";
import LeftSidebarStore from "../../classes/LeftSidebarStore";
import { ActivableSvgObjectWithProps } from "../../misc/types";
import styles from "../../styles/componentStyles/leftSidebar.module.scss";
import FriendsSvg from "../svg/FriendsSvg";
import HomeSvg from "../svg/HomeSvg";
import ProfileSvg from "../svg/ProfileSvg";
import StarSvg from "../svg/StarSvg";

export interface LeftSidebarProps {
  leftSidebarStore: LeftSidebarStore
}

const LeftSidebar = ({ leftSidebarStore }: LeftSidebarProps) => {

  const svgComponentsList: ActivableSvgObjectWithProps[] = [HomeSvg, ProfileSvg, StarSvg, FriendsSvg];

  const renderedSvgComponents = useMemo(() => {
    return svgComponentsList.map((Svg, i) =>
      <button onClick={() => leftSidebarStore.handleIconClick(i)} key={i} className={styles["btn"]}>
        <Svg.Component {...(leftSidebarStore.activeIconNumber === i ? Svg.activeProps : Svg.notActiveProps)} />
      </button>
    );
  }, [leftSidebarStore.activeIconNumber]);

  return (
    <div className={styles["main"]} >
      {renderedSvgComponents}
    </div>
  );

};


export default observer(LeftSidebar);