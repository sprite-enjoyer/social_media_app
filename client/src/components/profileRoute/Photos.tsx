import styles from "../../styles/profileRouteStyles/photos.module.scss";
import ProfileComponentTitle from "./ProfileComponentTitle";

export interface PhotosProps {
  photos: { src: string, alt: string }[],
}

const Photos = ({ photos }: PhotosProps) => {
  return (
    <div className={styles["main"]} >
      <ProfileComponentTitle title="Recent Photos" />
      <div className={styles["grid"]} >
        {
          photos.map(({ src, alt }, i) =>
            <div key={i} className={styles["badge"]} >
              <img src={src} alt={alt} className={styles["image"]} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Photos;
