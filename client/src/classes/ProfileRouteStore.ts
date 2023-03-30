import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import { PublicUser } from "../misc/types";

class ProfileRouteStore {

  admin = false;

  user?: PublicUser;

  constructor() {
    makeObservable(this, {
      admin: observable,
      user: observable,
      setAdmin: action,
      setUser: action,
      fetchUserData: action,
    });
  }

  setAdmin(newValue: boolean) {
    this.admin = newValue;
  }

  setUser(newValue: PublicUser) {
    this.user = newValue;
  }

  async fetchUserData(userName: string) {
    type responseType = { message: string, user: PublicUser };
    await axios.get<responseType>(`${import.meta.env.VITE_SERVER_BASE_URL}/${userName}`)
      .then(res => {
        const user = res.data.user;
        if (user) this.setUser(res.data.user);
        else console.log(res.data.message);
      })
      .catch(e => console.error(e));
  }

}
export default ProfileRouteStore;