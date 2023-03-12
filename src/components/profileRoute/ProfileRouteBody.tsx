import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import ProfileIntro, { ProfileIntroInformation, ProfileIntroNetwork } from "./ProfileIntro";
import ProfileRouteUserPanel from "./ProfileRouteUserPanel";

const ProfileRouteBody = () => {
  return (
    <div className={styles["main"]} >
      <ProfileRouteUserPanel />
      <div className={styles["bottom"]} >
        <div className={styles["bottom__left"]}>
          <ProfileIntro content={testInformation} networks={testNetworks} />
        </div >
        <div className={styles["bottom__middle"]} >
        </div>
        <div className={styles["bottom__right"]} >
        </div>
      </div>
    </div>
  );
};

const testInformation: ProfileIntroInformation[] = [
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

const testNetworks: ProfileIntroNetwork[] = [
  {
    networkName: "Facebook",
    link: "https://www.facebook.com/saba.samxaradze.750"
  },
  {
    networkName: "Instagram",
    link: "https://www.instagram.com/sprite_enjoyerr/"

  },
  {
    networkName: "Twitter",
    link: "https://twitter.com/sprite__enjoyer"
  }
]

export default ProfileRouteBody;