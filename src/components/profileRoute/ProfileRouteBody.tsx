import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import ProfileIntro from "./ProfileIntro";
import ProfileRouteUserPanel from "./ProfileRouteUserPanel";

const ProfileRouteBody = () => {
  return (
    <div className={styles["main"]} >
      <ProfileRouteUserPanel />
      <div className={styles["bottom"]} >
        <div className={styles["bottom__left"]}>
          <ProfileIntro content={testInformation} />
        </div >
        <div className={styles["bottom__middle"]} >
        </div>
        <div className={styles["bottom__right"]} >
        </div>
      </div>
    </div>
  );
};

const testInformation = [
  {
    title: "Test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cupiditate, vitae, itaque maiores.",
    key: 1
  },
  {
    title: "Test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cupiditate, vitae, itaque maiores.",
    key: 2
  },
  {
    title: "Test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cupiditate, vitae, itaque maiores.",
    key: 3
  },
];


export default ProfileRouteBody;