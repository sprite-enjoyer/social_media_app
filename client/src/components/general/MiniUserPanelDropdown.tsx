import { observer } from "mobx-react";
import HeaderStore from "../../classes/HeaderStore";
import styles from "../../styles/componentStyles/miniUserPanelDropdown.module.scss";
import "../../assets/icons/settings.svg"

export interface MiniUserPanelDropDownProps {
  headerStore: HeaderStore
}

const LocalTitle = ({ title, line }: { title: string, line: boolean }) => {
  return (
    <>
      {line && <hr className={styles["line"]} />}
      <div className={styles["title"]} >
        {title}
      </div>
      <hr className={styles["line"]} />
    </>
  );
};

const MiniUserPanelDropdown = ({ headerStore }: MiniUserPanelDropDownProps) => {

  return (
    <div className={styles["main"]} >
      <LocalTitle title="YOUR ACCOUNT" line={false} />
      <div className={styles["item"]} >
        <img src="/src/assets/icons/settings.svg" alt="settings" />
        <span className={styles["item__text"]} ></span>
      </div>
      <div className={styles["item"]} ></div>
      <div className={styles["item"]} ></div>
      <LocalTitle title="CHAT SETTINGS" line={true} />
      <div className={styles["item"]} ></div>
      <div className={styles["item"]} ></div>
      <div className={styles["item"]} ></div>
      <div className={styles["item"]} ></div>
      <LocalTitle title="CUSTOM STATUS" line={true} />
      <div>
        <div className={styles["input-wrapper"]} >
          <input type="text" className={styles["input-wrapper__input"]} />
          <button className={styles["input-wrapper__btn"]} >
            <img src="" alt="" className={styles["img"]} />
          </button>
        </div>
      </div>
      <LocalTitle title="ABOUT OLYMPUS" line={true} />
      <div className={styles["about-div"]} ></div>
      <div className={styles["about-div"]} ></div>
      <div className={styles["about-div"]} ></div>
      <div className={styles["about-div"]} ></div>

    </div>
  );
};

export default observer(MiniUserPanelDropdown);