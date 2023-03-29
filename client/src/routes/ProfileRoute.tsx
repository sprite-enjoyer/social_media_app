import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import ProfileRouteBody from "../components/profileRoute/ProfileRouteBody";
import RightSidebar from "../components/RightSidebar";
import AuthStore from "../stores/AuthStore";
import HeaderStore from "../stores/HeaderStore";
import ProfileRouteStore from "../stores/ProfileRouteStore";
import RightSidebarStore from "../stores/RightSidebarStore";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";

const store = new ProfileRouteStore();
const headerStore = new HeaderStore();
const rightSidebarStore = new RightSidebarStore();

const ProfileRoute = () => {
  const navigate = useNavigate();
  const { userName } = useParams();
  if (!userName) return null;

  useEffect(() => {
    AuthStore.checkIfLoggedIn(navigate);
    console.log(AuthStore.user);
  }, []);

  useEffect(() => {

  }, [AuthStore.user]);
  return (
    <div className={styles["main"]} >
      <Header store={headerStore} />
      <div className={styles["bottom"]} >
        <LeftSidebar />
        <div className={styles["body"]} >
          <ProfileRouteBody store={store} />
        </div>
        <RightSidebar store={rightSidebarStore} />
      </div>
    </div>
  );
};

export default observer(ProfileRoute);

