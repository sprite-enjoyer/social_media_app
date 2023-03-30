import axios from "axios";
import { PublicUser } from "../misc/types";

class AuthStore {

  private static loggedUserName?: string;

  static async checkIfLoggedIn(): Promise<null | PublicUser> {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_BASE_URL}/users/get/currentUser`,
      { withCredentials: true, }
    )
      .then(res => res)
      .catch(e => console.error(e));
    if (!response || !response.data || !response.data.user) return null;

    const { user } = response.data;
    this.loggedUserName = user.username;

    return user;
  }

  static async signIn(body: { email: string, password: string }) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_BASE_URL}/users/checkUser`,
      body,
      { withCredentials: true }
    )
      .then(res => res)
      .catch(e => console.error(e));
    if (!response) return null;

    const { user }: { user: PublicUser } = response.data;
    this.loggedUserName = user.username;
    return user ?? null;
  }

  static getLoggedUserName() {
    return AuthStore.loggedUserName;
  }

  static async signOut() {
    document.cookie = "jwt=; Path=/;";
  }

}
export default AuthStore;