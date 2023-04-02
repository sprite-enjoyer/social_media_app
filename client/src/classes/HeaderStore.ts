import { action, makeObservable, observable } from "mobx";


class HeaderStore {

  dropdownShown = false;

  constructor() {
    makeObservable(this, {
      dropdownShown: observable,
      setDropdownShown: action,
    });
  }

  setDropdownShown(newValue: boolean) {
    this.dropdownShown = newValue;
  }
}


export default HeaderStore;