import styles from "../styles/signIn.module.scss";
import googleImg from "../assets/oauth_icons/google.svg";
import facebookImg from "../assets/oauth_icons/facebook.svg";
import showPassword from "../assets/icons/show_password.svg";
import hidePassword from "../assets/icons/hide_password.svg";
import { useState } from "react";

const SignIn = () => {

  const [pwdShown, setPwdShown] = useState(false);

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
          <img src={facebookImg} alt="facebook logo" />
          <span>Sign in with Facebook</span>
        </button>
      </div>
      <div className={styles["inputs"]} >
        <label className={styles["label"]} >
          Email Address:
          <input type="email" className={styles["email"]} />
        </label>
        <label className={styles["label"].concat(" ".concat(styles["pwd-label"]))} >
          Password:
          <div className={styles["password-div"]} >
            <input type="password" className={styles["pwd"]} />
            <button className={styles["show-button"]} >
              <img
                src={pwdShown ? hidePassword : showPassword}
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
      <button className={styles["btn"]} >
        Sign In
      </button>
      <div className={styles["register-div"]} >
        <span className={styles["question-txt"]} >
          Don't have an account?
        </span>
        <a href="" className={styles["register-link"]}>
          Register
        </a>
      </div>
    </div>
  );
};

export default SignIn;