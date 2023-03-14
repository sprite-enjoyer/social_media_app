import styles from '../../styles/profileRouteStyles/profileComponentTitle.module.scss';

export interface ProfileComponentTitleProps {
  title: string
}

const ProfileComponentTitle = ({ title }: ProfileComponentTitleProps) => {

  return (
    <div className={styles["main"]} >
      <span className={styles["main__title"]} >
        {title}
      </span>
      <hr className={styles["main__line"]} />
    </div>
  );
};

export default ProfileComponentTitle;
