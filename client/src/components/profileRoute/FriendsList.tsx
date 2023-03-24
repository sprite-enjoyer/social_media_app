import styles from "../../styles/profileRouteStyles/friendsList.module.scss";
import ProfileComponentTitle from "./ProfileComponentTitle";

export interface ProfileRouteFriend {
  friendName: string,
  imageSrc: string,
  imageAlt: string,
  link: string,
}

export interface FriendsListProps {
  friends: ProfileRouteFriend[],
}

const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <div className={styles["main"]} >
      <ProfileComponentTitle title={`Friends (${friends.length}) `} />
      <div className={styles["content"]} >
        {
          friends.map((friend, i) =>
            <div key={i} className={styles["content__friend"]} >
              <a href={friend.link} className={styles["content__friend__link"]}>
                <img
                  className={styles["content__friend__link__image"]}
                  src={friend.imageSrc}
                  alt={friend.imageAlt}
                />
              </a>
            </div>
          )
        }
      </div>
    </div>
  );
};


export default FriendsList;