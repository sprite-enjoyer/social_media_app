import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import ProfileRouteBody from "../components/profileRoute/ProfileRouteBody";
import RightSidebar from "../components/RightSidebar";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";

const ProfileRoute = () => {

  return (
    <div className={styles["main"]} >
      <Header />
      <div className={styles["bottom"]} >
        <LeftSidebar />
        <div className={styles["body"]} >
          <ProfileRouteBody />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default ProfileRoute;

