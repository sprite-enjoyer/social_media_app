import { action, makeObservable, observable } from "mobx";
import { NavigateFunction } from "react-router-dom";

class LeftSidebarStore {

  activeIconNumber = 0;

  navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
    makeObservable(this, {
      activeIconNumber: observable,
      setActiveIconNumber: action,
      handleIconClick: action,
    });
  }

  setActiveIconNumber(newValue: number) {
    this.activeIconNumber = newValue;
  }

  handleIconClick(iconNumber: number) {
    this.activeIconNumber = iconNumber;
    //TODO then navigate to the respective route
  }
}

export default LeftSidebarStore;