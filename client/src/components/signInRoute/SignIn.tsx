import styles from "../../styles/signInRouteStyles/signIn.module.scss";
import googleImg from "../../assets/oauth_icons/google.svg";
import facebookImg from "../../assets/oauth_icons/facebook.svg";
import showPassword from "../../assets/icons/show_password.svg";
import hidePassword from "../../assets/icons/hide_password.svg";
import SignInRouteStore from "../../classes/SignInRouteStore";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthStore from "../../classes/AuthStore";

export interface SignInProps {
  store: SignInRouteStore,
}

const SignIn = ({ store }: SignInProps) => {
  const navigate = useNavigate();
  const handleRegisterButtonClick = () => store.setSignUpShown(true);
  const handleSignInButtonClick = async () => {
    const user = await AuthStore.signIn({ email: store.signInEmail, password: store.signInPassword });
    if (user) navigate(`/main/${user.username}`);
  };

  useEffect(() => {
    AuthStore.checkIfLoggedIn().then(user => {
      if (user) navigate(`/main/${user.username}`);
    });
  }, []);

  return (
    <div className={styles["main"]} >
      <h1 className={styles["title"]} >
        Sign In
      </h1>
      <hr className={styles["spacer"]} />
      <div className={styles["signInButtons"]} >
        <button className={styles["google-btn"]} >
          <img src={googleImg} alt="google logo" />
          <span>Sign in with Google</span>
        </button>
        <button className={styles["facebook-btn"]} >
          <img className={styles["facebook-img"]} src={facebookImg} alt="facebook logo" />
          <span className={styles["facebook-txt"]} >Sign in with Facebook</span>
        </button>
      </div>
      <div className={styles["inputs"]} >
        <label className={styles["label"]} >
          Email Address:
          <input
            type="email"
            className={styles["email"]}
            onChange={(e) => store.setSignInEmail(e.target.value)}
          />
        </label>
        <label className={styles["label"].concat(" ".concat(styles["pwd-label"]))} >
          Password:
          <div className={styles["password-div"]} >
            <input
              type={store.passwordShown ? "text" : "password"}
              className={styles["pwd"]}
              onChange={(e) => store.setSignInPassword(e.target.value)}
            />
            <button
              onClick={() => store.setPasswordShown(!store.passwordShown)}
              className={styles["show-button"]}
            >
              <img
                src={store.passwordShown ? hidePassword : showPassword}
                alt="show/hide button"
                className={styles["button-image"]}
              />
            </button>
          </div>
        </label>
      </div>
      <div className={styles["misc"]} >
        <div className={styles["remember-me"]} >
          <input type="checkbox" className={styles["checkbox"]} />
          <span className={styles["remember-text"]}>
            Remember me
          </span>
        </div>
        <a href="" className={styles["forgot-password"]}>
          Forgot Password
        </a>
      </div>
      <button onClick={handleSignInButtonClick} className={styles["btn"]} >
        Sign In
      </button>
      <div className={styles["register-div"]} >
        <span className={styles["question-txt"]} >
          Don't have an account?
        </span>
        <button onClick={handleRegisterButtonClick} className={styles["register-btn"]}>
          Register {store.signUpShown}
        </button>
      </div>
    </div>
  );
};

export default observer(SignIn);