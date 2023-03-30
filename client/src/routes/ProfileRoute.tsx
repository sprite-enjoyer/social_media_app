import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import ProfileRouteBody from "../components/profileRoute/ProfileRouteBody";
import RightSidebar from "../components/RightSidebar";
import AuthStore from "../classes/AuthStore";
import HeaderStore from "../classes/HeaderStore";
import ProfileRouteStore from "../classes/ProfileRouteStore";
import RightSidebarStore from "../classes/RightSidebarStore";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";

const ProfileRoute = () => {
  const profileRouteStore = new ProfileRouteStore();
  const headerStore = new HeaderStore();
  const rightSidebarStore = new RightSidebarStore();
  const navigate = useNavigate();
  const { userName } = useParams();
  if (!userName) return null;

  useEffect(() => {
    AuthStore.checkIfLoggedIn()
      .then(res => {
        if (!res) { navigate("/"); return; }
        profileRouteStore.setAdmin(res.username === AuthStore.getLoggedUserName());
      })
      .catch(e => { console.error(e); navigate("/") });
  }, []);

  return (
    <div className={styles["main"]} >
      <Header store={headerStore} />
      <div className={styles["bottom"]} >
        <LeftSidebar />
        <div className={styles["body"]} >
          <ProfileRouteBody store={profileRouteStore} />
        </div>
        <RightSidebar store={rightSidebarStore} />
      </div>
    </div>
  );
};

export default observer(ProfileRoute);

