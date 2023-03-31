import styles from "../../styles/profileRouteStyles/profileRouteUserPanel.module.scss";
import backgroundImage from "../../assets/images/backgroundImage.jpg";
import profilePicture from "../../assets/images/profile_picture.jpg";
import addPhotoSvg from "../../assets/icons/add_photo.svg";
import settingsSvg from "../../assets/icons/settings.svg";
import othersSvg from "../../assets/icons/others.svg";
import ProfileRouteStore from "../../classes/ProfileRouteStore";

export interface ProfileRouteUserPanelProps {
  profileRouteStore: ProfileRouteStore
}

const ProfileRouteUserPanel = ({ profileRouteStore }: ProfileRouteUserPanelProps) => {

  return (
    <div className={styles["main"]} >
      <div className={styles["background-image-div"]} >
        <img src={backgroundImage} alt="background image" className={styles["background-image"]} />
      </div>
      <div className={styles["transparent-div"]} >
        <div className={styles["transparent-div__middle"]} >
          <div className={styles["transparent-div__middle__picture-div"]} >
            <img
              className={styles["transparent-div__middle__picture-div__image"]}
              src={profilePicture}
              alt="profile picture"
            />
          </div>
          <div className={styles["transparent-div__middle__bottom"]} >
            <span className={styles["transparent-div__middle__bottom__name"]} >
              Name LastName
            </span>
            <span className={styles["transparent-div__middle__bottom__location"]} >
              Timbuktu, Neverland
            </span>
          </div>
        </div>
        <div className={styles["transparent-div__button-group"]} >
          <button className={styles["transparent-div__button-group__btn"]} >
            <img
              className={styles["transparent-div__button-group__btn__image"]}
              src={addPhotoSvg}
              alt="add photo image"
            />
          </button>
          <button className={styles["transparent-div__button-group__btn"]} >
            <img
              className={styles["transparent-div__button-group__btn__image"]}
              src={settingsSvg}
              alt="settings image"
            />
          </button>
        </div>
      </div>
      <div className={styles["panel-buttons-div"]} >
        <div className={styles["panel-buttons-div__left"]} >
          <button className={styles["panel-btn"]} >
            Timeline
          </button>
          <button className={styles["panel-btn"]} >
            About
          </button>
          <button className={styles["panel-btn"]} >
            Friends
          </button>
        </div>
        <div className={styles["panel-buttons-div__right"]} >
          <button className={styles["panel-btn"]} >
            Photos
          </button>
          <button className={styles["panel-btn"]} >
            Videos
          </button>
          <button className={styles["panel-btn"]} >
            <img src={othersSvg} alt="others" className={styles["panel-btn-img"]} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileRouteUserPanel;