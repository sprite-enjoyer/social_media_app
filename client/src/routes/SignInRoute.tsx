import SignIn from "../components/signInRoute/SignIn";
import SignUpModal from "../components/signInRoute/SignUpModal";
import SignInRouteStore from "../classes/SignInRouteStore";
import styles from "../styles/signInRouteStyles/signInRoute.module.scss";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthStore from "../classes/AuthStore";
import InsideModal from "../misc/InsideModal";

const store = new SignInRouteStore();

const SignInRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AuthStore.checkIfLoggedIn().then(res => {
      if (res.user) navigate(`/main/${res.user?.username}`);
    })
  }, []);

  return (
    <>
      {
        store.signUpShown &&
        <InsideModal handleOnClick={() => store.setSignUpShown(false)}>
          <SignUpModal store={store} />
        </InsideModal>
      }
      <div className={styles["main"]} >
        <div className={styles["main__left"]} >
        </div>
        <div className={styles["main__right"]} >
          <SignIn store={store} />
        </div>
      </div>
    </>
  );
};

export default observer(SignInRoute);