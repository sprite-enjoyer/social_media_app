import styles from "../styles/componentStyles/headerDropDown.module.scss";
import dummyUserSvg from "../assets/icons/test-user.svg";
import dropDownSvg from "../assets/icons/dropdown.svg";

const HeaderDropDown = () => {
  return (
    <div className={styles["main"]} >
      <div className={styles["left"]} >
        <button className={styles["status-btn"]} >
          <img
            className={styles["user-image"]}
            src={dummyUserSvg}
            alt="user image"
          />
        </button>
      </div>
      <div className={styles["middle"]} >
        <span className={styles["name"]} >
          name lastName
        </span>
        <span className={styles["title"]} >
          Space Cowboy
        </span>
      </div>
      <div className={styles["right"]} >
        <button className={styles["dropdown-btn"]} >
          <img
            className={styles["dropdown-img"]}
            src={dropDownSvg}
            alt="dropdown image"
          />
        </button>
      </div>
    </div>
  );
};


export default HeaderDropDown;