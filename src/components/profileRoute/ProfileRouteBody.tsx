import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import ReactNodeListVerticalRenderer from "../ReactNodeListVerticalRenderer";
import ProfileIntro from "./ProfileIntro";
import ProfileRouteUserPanel from "./ProfileRouteUserPanel";

const ProfileRouteBody = () => {
  return (
    <div className={styles["main"]} >
      <ProfileRouteUserPanel />
      <div className={styles["bottom"]} >
        <ReactNodeListVerticalRenderer
          children={[<ProfileIntro content={testInformation} />]}
          className={styles["bottom__left"]}
        />
        <ReactNodeListVerticalRenderer
          children={[<div key={1}>1</div>, <div key={2}>2</div>]}
          className={styles["bottom__middle"]}
        />
        <ReactNodeListVerticalRenderer
          children={[<div key={1}>1</div>, <div key={2}>2</div>]}
          className={styles["bottom__right"]}
        />
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