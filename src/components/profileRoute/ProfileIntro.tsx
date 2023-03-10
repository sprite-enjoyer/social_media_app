import styles from "../../styles/profileRouteStyles/profileIntro.module.scss";

export interface ProfileIntroProps {
  content: { title: string, description: string, key: string | number }[];
}

const ProfileIntro = ({ content }: ProfileIntroProps) => {

  return (
    <div className={styles["main"]} >
      <div className={styles["main__title"]} >
        Profile Intro
      </div>
      <hr className={styles["main__line"]} />
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
    </div>
  );
};

export default ProfileIntro;