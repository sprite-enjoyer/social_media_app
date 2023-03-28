import { PublicUser } from "../misc/types";

class AuthStore {

  static user?: PublicUser;

  static admin = false;

  static async getUserFromApi(userName: string) {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    await fetch(`${baseURL}/users/${userName}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        this.user = await res.json();
        if (this.user) this.admin = this.user?.admin;
      })
      .catch(e => console.error(e));
  }

}
export default AuthStore;