import { action, makeObservable, observable } from "mobx";
import { PublicUser } from "../misc/types";



class ProfileRouteStore {

  user?: PublicUser;

  admin = false;

  constructor() {
    makeObservable(this, {
      user: observable,
      admin: observable,
      getApiResponse: action,
    });
  }

  async getApiResponse(userName: string) {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    fetch(`${baseURL}/users/${userName}`, {
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
export default ProfileRouteStore;