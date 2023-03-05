import styles from "../styles/signInRouteStyles/signUpModal.module.scss";
import { observer } from "mobx-react";
import SignInStore from "../stores/SignInStore";

export interface SignUpModalProps {
  store: SignInStore
}

const SignUpModal = ({ store }: SignUpModalProps) => {
  if (!store.signUpShown) return null;

  const handleMainDivClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    store.setSignUpShown(false);
  };

  return (
    <div className={styles["main"]} onClick={handleMainDivClick} >
      <div className={styles["container"]} onClick={(e) => e.stopPropagation()} >
        <div className={styles["top"]} >
          <span className={styles["title"]} >
            Sign Up
          </span>
          <span className={styles["info"]} >
            Complete the form below to register a new account.
          </span>
        </div>
        <hr className={styles["spacer"]} />
        <div className={styles["inputs"]} >
          <label className={styles["label"]} >
            Username
            <input type="text" className={styles["input"]} />
          </label >
          <label className={styles["label"]}>
            Email Address
            <input type="email" className={styles["input"]} />
          </label>
          <label className={styles["label"]}>
            Password
            <input type="text" className={styles["input"]} />
          </label>
        </div>
        <button className={styles["btn"]} >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default observer(SignUpModal);