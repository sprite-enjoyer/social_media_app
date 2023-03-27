import { makeObservable, observable } from "mobx";
import { action } from "mobx";
import { NavigateFunction } from "react-router-dom";

class SignInRouteStore {

  signUpShown = false;

  passwordShown = false;

  firstName = "";

  lastName = "";

  userName = "";

  email = "";

  password = "";

  signInEmail = "";

  signInPassword = "";

  apiResponse: { message: string, userName: string | null } | null = null;

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
      apiResponse: observable,
      setPasswordShown: action,
      setSignUpShown: action,
      setEmail: action,
      setFirstName: action,
      setLastName: action,
      setPassword: action,
      setSignInEmail: action,
      setUserName: action,
      setSignInPassword: action,
      setApiResponse: action,
    });
  }

  private getRequestBody() {
    return {
      email: this.signInEmail,
      password: this.signInPassword
    };
  }

  async getApiResponse(navigate: NavigateFunction) {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    await fetch(`${baseURL}/users/checkUser`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.getRequestBody())
    })
      .then(async res => {
        const data: { message: string, userName: string | null } = await res.json();
        if (data.userName) navigate(`/${data.userName}`);
        else alert("invalid user credentials!");
      })
      .catch(e => console.error(e));
  }

  setApiResponse(newValue: any) {
    this.apiResponse = newValue;
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


export default SignInRouteStore;