import styles from "../../styles/profileRouteStyles/profileIntro.module.scss";
import ProfileComponentTitle from "./ProfileComponentTitle";

export type ProfileIntroInformation = { title: string, description: string, key: string | number };
export type SocialNetwork = "Facebook" | "Twitter" | "Instagram";
export type ProfileIntroNetwork = { networkName: SocialNetwork, link: string };

export interface ProfileIntroProps {
  content: ProfileIntroInformation[],
  networks: ProfileIntroNetwork[],
}

const ProfileIntro = ({ content, networks }: ProfileIntroProps) => {

  return (
    <div className={styles["main"]} >
      <ProfileComponentTitle title="Profile Intro" />
      <div className={styles["main__content"]} >
        {
          content.map((section, i) =>
            <div key={section.key} className={styles["profile-section"]} >
              <div className={styles["profile-section__top"]} >
                {section.title}
              </div>
              <div className={styles["profile-section__bottom"]} >
                {section.description}
              </div>
            </div>
          )
        }
      </div>
      <span className={styles["other-networks-title"]} >
        Other networks:
      </span>
      <div className={styles["networks"]} >

        {
          networks.map(network =>
            <a
              href={network.link}
              target="_blank"
              key={network.networkName}
              className={styles["networks__btn"]}
            >
              <img
                className={styles["networks__btn__img"]}
                src={`${"/src/assets/oauth_icons/"}${network.networkName.toLowerCase()}.svg`}
                alt={`${network.networkName} logo`}
              />
            </a>
          )
        }
      </div>
    </div>
  );
};


export default ProfileIntro;