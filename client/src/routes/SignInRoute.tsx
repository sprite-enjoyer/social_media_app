import SignIn from "../components/signInRoute/SignIn";
import SignUpModal from "../components/signInRoute/SignUpModal";
import SignInStore from "../stores/SignInStore";
import styles from "../styles/signInRouteStyles/signInRoute.module.scss";
import { observer } from "mobx-react";

const store = new SignInStore();

const SignInRoute = () => {

  return (
    <>
      <SignUpModal store={store} />
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