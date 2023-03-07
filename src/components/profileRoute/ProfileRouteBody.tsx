import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import ComponentListVerticalRenderer from "../ComponentListVerticalRenderer";
import ProfileRouteUserPanel from "./ProfileRouteUserPanel";

const ProfileRouteBody = () => {
  return (
    <div className={styles["main"]} >
      <ProfileRouteUserPanel />
      <div className={styles["bottom"]} >
        <ComponentListVerticalRenderer
          children={[<div key={1}>1</div>, <div key={2}>2</div>]}
          className={styles["bottom__left"]}
        />
        <ComponentListVerticalRenderer
          children={[<div key={1}>1</div>, <div key={2}>2</div>]}
          className={styles["bottom__middle"]}
        />
        <ComponentListVerticalRenderer
          children={[<div key={1}>1</div>, <div key={2}>2</div>]}
          className={styles["bottom__right"]}
        />
      </div>
    </div>
  );
};


export default ProfileRouteBody;