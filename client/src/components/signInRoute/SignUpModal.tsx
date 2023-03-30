import styles from "../../styles/signInRouteStyles/signUpModal.module.scss";
import { observer } from "mobx-react";
import SignInRouteStore from "../../classes/SignInRouteStore";
export interface SignUpModalProps {
  store: SignInRouteStore
}

const SignUpModal = ({ store }: SignUpModalProps) => {
  if (!store.signUpShown) return null;

  const handleMainDivClick = () => store.setSignUpShown(false);

  const handleButtonClick = async () => {

    const requestBody = {
      firstName: store.firstName,
      lastName: store.lastName,
      userName: store.userName,
      email: store.email,
      password: store.password,
    };

    const result = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/users/post`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
    }).then(async res => await res.json());
  }

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
        <form className={styles["inputs"]} >
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>First Name</label>
            <input
              onChange={(e) => store.setFirstName(e.target.value)}
              type="text"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>Last Name</label>
            <input
              onChange={(e) => store.setLastName(e.target.value)}
              type="text"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>UserName</label>
            <input
              onChange={(e) => store.setUserName(e.target.value)}
              type="text"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>Email</label>
            <input
              onChange={(e) => store.setEmail(e.target.value)}
              type="email"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>Password</label>
            <input
              onChange={(e) => store.setPassword(e.target.value)}
              type="password"
              className={styles["input"]}
            />
          </div>
        </form>
        <button className={styles["btn"]} onClick={handleButtonClick} >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default observer(SignUpModal);