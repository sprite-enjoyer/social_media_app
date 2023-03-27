import { makeObservable, observable } from "mobx";
import { action } from "mobx";

class SignInStore {

  signUpShown = false;

  passwordShown = false;

  firstName = "";

  lastName = "";

  userName = "";

  email = "";

  password = "";

  signInEmail = "";

  signInPassword = "";

  constructor() {

    makeObservable(this, {
      signUpShown: observable,
      passwordShown: observable,
      firstName: observable,
      lastName: observable,
      userName: observable,
      email: observable,
      password: observable,
      signInEmail: observable,
      signInPassword: observable,
      setPasswordShown: action,
      setSignUpShown: action,
      setEmail: action,
      setFirstName: action,
      setLastName: action,
      setPassword: action,
      setSignInEmail: action,
      setUserName: action,
      setSignInPassword: action,
    });

  }

  setSignUpShown(newValue: boolean) {
    this.signUpShown = newValue;
  }

  setPasswordShown(newValue: boolean) {
    this.passwordShown = newValue;
  }

  setFirstName(neValue: string) {
    this.firstName = neValue;
  }

  setLastName(newValue: string) {
    this.lastName = newValue;
  }

  setUserName(newValue: string) {
    this.userName = newValue;
  }

  setEmail(newValue: string) {
    this.email = newValue;
  }

  setPassword(newValue: string) {
    this.password = newValue;
  }

  setSignInEmail(newValue: string) {
    this.signInEmail = newValue;
  }

  setSignInPassword(newValue: string) {
    this.signInPassword = newValue;
  }

};


export default SignInStore;