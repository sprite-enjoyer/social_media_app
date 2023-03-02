import SignIn from "../components/SignIn";
import styles from "../styles/signInRoute.module.scss";

const SignInRoute = () => {
  return (
    <div className={styles["main"]} >
      <div className={styles["main__left"]} >

      </div>
      <div className={styles["main__right"]} >
        <SignIn />
      </div>
    </div>
  );
};

export default SignInRoute;