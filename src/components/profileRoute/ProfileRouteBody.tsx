import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import ProfileRouteUserPanel from "./ProfileRouteUserPanel";


const ProfileRouteBody = () => {
  return (
    <div className={styles["main"]} >
      <ProfileRouteUserPanel />
      <div className={styles["bottom"]} >
        <div className={styles["bottom__left"]} >

        </div>
        <div className={styles["bottom__middle"]} >

        </div>
        <div className={styles["bottom__right"]} >

        </div>
      </div>
    </div>
  );
};


export default ProfileRouteBody;