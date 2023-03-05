import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";


const ProfileRoute = () => {

  return (
    <>
      <Header />
      <div className={styles["main"]} >
        <LeftSidebar />
        <div className={styles["body"]} >
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default ProfileRoute;

