import { makeObservable, observable } from "mobx";
import { action } from "mobx";

class SignInStore {

  signUpShown = false;

  passwordShown = false;

  constructor() {

    makeObservable(this, {

      signUpShown: observable,
      passwordShown: observable,
      setPasswordShown: action,
      setSignUpShown: action,

    });

  }

  setSignUpShown(newValue: boolean) {
    this.signUpShown = newValue;
  }

  setPasswordShown(newValue: boolean) {
    this.passwordShown = newValue;
  }

};


export default SignInStore;