import styles from "../../styles/profileRouteStyles/profileIntro.module.scss";
import ReactNodeListVerticalRenderer from "../ReactNodeListVerticalRenderer";

export interface ProfileIntroProps {
  content: { title: string, description: string, key: string | number }[];
}

const ProfileIntro = ({ content }: ProfileIntroProps) => {

  const infoSections = content.map((section, i) =>
    <div key={section.key} className={styles["profile-section"]} >
      <div className={"profile-section__top"} >
        {section.title}
      </div>
      <div className={"profile-section__bottom"} >
        {section.description}
      </div>
    </div>
  );

  return (
    <div className={styles["main"]} >
      <ReactNodeListVerticalRenderer children={infoSections} />

    </div>
  );
};

export default ProfileIntro;