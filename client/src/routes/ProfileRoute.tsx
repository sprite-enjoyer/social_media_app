import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import ProfileRouteBody from "../components/profileRoute/ProfileRouteBody";
import RightSidebar from "../components/RightSidebar";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";

const ProfileRoute = () => {
  const { userName } = useParams();
  useEffect(() => {
    const response = fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/users/${userName}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => console.log(res.json()))
      .catch(e => console.error(e));
  }, []);

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

