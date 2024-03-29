import styles from "../../styles/componentStyles/header.module.scss";
import MiniUserPanel from "./MiniUserPanel";
import searchSvg from "../../assets/icons/search.svg";
import MessagesSvg from "../svg/MessagesSvg";
import NotificationsSvg from "../svg/NotificationsSvg";
import LogoSvg from "../svg/LogoSvg";
import HeaderStore from "../../classes/HeaderStore";

export interface HeaderProps {
  headerStore: HeaderStore
}

const Header = ({ headerStore }: HeaderProps) => {

  return (
    <div className={styles["main"]} >
      <div className={styles["logo-div"]} >
        <LogoSvg
          stroke={"white"}
          strokeWidth={1}
          strokeWidth2={1}
          fill={"white"}
          width={"50px"}
          height={"100%"}
          fill2={"white"}
        />
      </div>
      <div className={styles["page-name-div"]} >
        <span className={styles["page-name-txt"]} >
          Profile Page
        </span>
      </div>
      <div className={styles["search-div"]}>
        <input type="search" className={styles["search-input"]} />
        <button className={styles["search-button"]} >
          <img
            className={styles["search-image"]}
            src={searchSvg}
            alt="search icon"
          />
        </button>
      </div>
      <div className={styles["find-friends-div"]} >
        <button className={styles["find-friends-button"]} >
          Find Friends
        </button>
      </div>
      <div className={styles["right-div"]} >
        <button className={styles["notifications-btn"]}>
          <NotificationsSvg
            width={"50px"}
            height={"100%"}
            fill={"rgba(254, 91, 56, 0.9)"}
            fill2={"black"}
            stroke={"black"}
            strokeWidth={1}
          />
        </button>
        <button className={styles["messages-btn"]} >
          <MessagesSvg
            fill={"rgba(254, 92, 56, 0.9)"}
            stroke={"black"}
            strokeWidth={2}
            width={"100%"}
            height={"40px"}
          />
        </button>
        <MiniUserPanel headerStore={headerStore} />
      </div>
    </div>
  );

};


export default Header;