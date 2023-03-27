import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import ProfileRouteBody from "../components/profileRoute/ProfileRouteBody";
import RightSidebar from "../components/RightSidebar";
import ProfileRouteStore from "../stores/ProfileRouteStore";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";

const store = new ProfileRouteStore();

export interface ProfileRouteBaseComponentProps {
  store: ProfileRouteStore;
}

const ProfileRoute = () => {
  const { userName } = useParams();
  if (!userName) return null;

  useEffect(() => {
    store.getApiResponse(userName);
  }, []);

  return (
    <div className={styles["main"]} >
      <Header store={store} />
      <div className={styles["bottom"]} >
        <LeftSidebar store={store} />
        <div className={styles["body"]} >
          <ProfileRouteBody store={store} />
        </div>
        <RightSidebar store={store} />
      </div>
    </div>
  );
};

export default ProfileRoute;

