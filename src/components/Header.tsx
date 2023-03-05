import styles from "../styles/componentStyles/header.module.scss";
import HeaderDropDown from "./HeaderDropDown";
import logo from "../assets/icons/logo.svg";
import searchSvg from "../assets/icons/search.svg";
import notificationsSvg from "../assets/icons/notifications.svg";
import messagesSvg from "../assets/icons/messages.svg";
import profileSvg from "../assets/icons/profile.svg";

const Header = () => {

  return (
    <div className={styles["main"]} >
      <div className={styles["logo-div"]} >
        <img
          className={styles["logo-img"]}
          src={logo}
          alt="website logo"
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
          <img
            className={styles["notifications-img"]}
            src={notificationsSvg}
            alt="messages icon"
          />
        </button>
        <button className={styles["messages-btn"]} >
          <img
            className={styles["messages-img"]}
            src={messagesSvg}
            alt="messages icon"
          />
        </button>
        <button className={styles["profile-btn"]} >
          <img
            className={styles["profile-img"]}
            src={profileSvg}
            alt="profile button image"
          />
        </button>
        <HeaderDropDown />
      </div>
    </div>
  );

};


export default Header;