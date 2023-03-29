import { NavigateFunction } from "react-router-dom";
import { PublicUser } from "../misc/types";

class AuthStore {

  static user?: PublicUser;

  static admin = false;

  static async checkIfLoggedIn(navigate: NavigateFunction) {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    await fetch(`${baseURL}/users/get/currentUser`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const { user } = await res.json();
        if (user) {
          this.user = user;
          navigate(`/${this.user?.username}`);
        };
      })
      .catch(e => console.error(e));
  }

  static async getApiResponse(navigate: NavigateFunction, body: { email: string, password: string }) {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    await fetch(`${baseURL}/users/checkUser`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(async res => {
        const { user }: { user: PublicUser } = await res.json();
        if (user.username) navigate(`/${user.username}`);
        else alert("invalid user credentials!");
      })
      .catch(e => console.error(e));
  }

}
export default AuthStore;