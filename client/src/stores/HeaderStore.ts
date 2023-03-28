import { makeObservable } from "mobx";


class HeaderStore {
  constructor() {
    makeObservable(this, {});
  }
}


export default HeaderStore;