import axios, { AxiosResponse } from "axios";
import { GetCurrentUserResponse, PublicUser } from "../misc/types";

class AuthStore {

  private static loggedUserName?: string;
  private static savedUserName?: string;

  static async checkIfLoggedIn(): Promise<GetCurrentUserResponse> {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_BASE_URL}/users/get/currentUser`,
      { withCredentials: true, }
    )
      .then(res => res)
      .catch(e => console.error(e)) as AxiosResponse<GetCurrentUserResponse>;

    if (!response || !response.data || !response.data.user) {
      return {
        guest: true,
        user: null,
        loggedIn: false,
        message: "no response received",
      };
    }

    const { user, message, loggedIn } = response.data;
    if (!user) console.error(message);

    this.savedUserName = user.username;
    if (loggedIn) this.loggedUserName = user.username;

    return { ...response.data };
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

  static getSavedUserName() {
    return this.savedUserName;
  }

  static async signOut() {
    await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/users/get/signOut`)
      .then(res => res)
      .catch(e => console.error(e));
  }

}
export default AuthStore;