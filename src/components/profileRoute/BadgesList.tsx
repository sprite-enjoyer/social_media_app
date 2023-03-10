import styles from "../../styles/profileRouteStyles/badgesList.module.scss";

export interface BadgesListProps {
  badges: unknown[],
}

const BadgesList = ({ badges }: BadgesListProps) => {
  return (
    <div className={styles["main"]} >

    </div>
  );
};

export default BadgesList;