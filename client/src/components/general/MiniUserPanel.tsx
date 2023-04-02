import styles from "../../styles/componentStyles/miniUserPanel.module.scss";
import dropDownSvg from "../../assets/icons/dropdown.svg";
import HeaderStore from "../../classes/HeaderStore";
import { observer } from "mobx-react";
import MiniUserPanelDropdown from "./MiniUserPanelDropdown";

export interface MiniUserPanelProps {
  headerStore: HeaderStore
}

const MiniUserPanel = ({ headerStore }: MiniUserPanelProps) => {
  return (
    <div className={styles["main"]} >
      <div className={styles["left"]} >
        <button className={styles["status-btn"]} >
          <img
            className={styles["user-image"]}
            src="/src/assets/images/profile_picture.jpg"
            alt="user image"
          />
          <div style={{ backgroundColor: "green" }} className={styles["status-btn__indicator"]} />
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
        <button
          onClick={() => headerStore.setDropdownShown(!headerStore.dropdownShown)}
          className={styles["dropdown-btn"]}
        >
          <img
            className={styles["dropdown-img"]}
            src={dropDownSvg}
            alt="dropdown image"
          />
        </button>
      </div>
      {headerStore.dropdownShown && <MiniUserPanelDropdown headerStore={headerStore} />}
    </div >
  );
};


export default observer(MiniUserPanel);