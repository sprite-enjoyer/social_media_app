import styles from "../../styles/signInRouteStyles/signUpModal.module.scss";
import { observer } from "mobx-react";
import SignInStore from "../../stores/SignInStore";
import { useState } from "react";
export interface SignUpModalProps {
  store: SignInStore
}

const SignUpModal = ({ store }: SignUpModalProps) => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  if (!store.signUpShown) return null;

  const handleMainDivClick = () => store.setSignUpShown(false);

  const handleButtonClick = async () => {

    const result = await fetch("http://localhost:3000/users/post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInput),
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
              onChange={(e) => setUserInput({ ...userInput, firstName: e.target.value })}
              value={userInput.firstName}
              type="text"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>Last Name</label>
            <input
              onChange={(e) => setUserInput({ ...userInput, lastName: e.target.value })}
              value={userInput.lastName}
              type="text"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>UserName</label>
            <input
              onChange={(e) => setUserInput({ ...userInput, userName: e.target.value })}
              value={userInput.userName}
              type="text"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>Email</label>
            <input
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              value={userInput.email}
              type="email"
              className={styles["input"]}
            />
          </div>
          <div className={styles["label-input-group"]} >
            <label className={styles["label"]}>Password</label>
            <input
              onChange={(e) => setUserInput({ ...userInput, password: e.target.value })}
              value={userInput.password}
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