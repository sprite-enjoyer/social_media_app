import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import ProfileRouteBody from "../components/profileRoute/ProfileRouteBody";
import RightSidebar from "../components/RightSidebar";
import AuthStore from "../classes/AuthStore";
import ProfileRouteStore from "../classes/ProfileRouteStore";
import styles from "../styles/profileRouteStyles/profileRoute.module.scss";

const ProfileRoute = () => {
  const profileRouteStore = new ProfileRouteStore();

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
    <div className={styles["body"]} >
      <ProfileRouteBody store={profileRouteStore} />
    </div>
  );
};

export default observer(ProfileRoute);

