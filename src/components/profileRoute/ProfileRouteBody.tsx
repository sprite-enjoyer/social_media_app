import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import Photos from "./Photos";
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
          <Photos photos={testPhotos} />
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
];

const testPhotos: { src: string, alt: string }[] = [
  { src: "https://ychef.files.bbci.co.uk/976x549/p02k33hl.jpg", alt: "mona lisa" },
  { src: "https://the-decoder.com/wp-content/uploads/2022/09/mona_lisa_dall_e_2_title.jpg", alt: "mona lisa" },
];

export default ProfileRouteBody;