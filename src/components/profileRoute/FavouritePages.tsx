import React from "react";
import styles from "../../styles/profileRouteStyles/favouritePages.module.scss";
import ProfileComponentTitle from "./ProfileComponentTitle";

export interface ProfileRouteFavouritePage {
  name: string,
  type: string,
  imageSrc: string,
  imageAlt: string,
}

export interface FavouritePagesProps {
  pages: ProfileRouteFavouritePage[],
}

interface StarSvgComponentProps { active: boolean };

const StarSvgComponent = ({ active }: StarSvgComponentProps) => {
  return (
    <div className={styles["star"]} >
      <svg
        className={styles[active ? "star__svg__on" : "star__svg__off"]}
        fill="none"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const FavouritePages = ({ pages }: FavouritePagesProps) => {

  return (
    <div className={styles["main"]} >
      <ProfileComponentTitle title="Favourite Pages" />
      <div className={styles["content"]} >
        {
          pages.map((page, i) =>
            <React.Fragment key={i}>
              <div className={styles["page-container"]} >
                <div className={styles["page-container__left"]} >
                  <div className={styles["page-container__left__image-container"]} >
                    <img
                      className={styles["page-container__left__image-container__image"]}
                      src={page.imageSrc}
                      alt={page.imageAlt}
                    />
                  </div>
                  <div className={styles["page-container__left__names"]}>
                    <span className={styles["page-container__left__names__name"]} >
                      {page.name}
                    </span>
                    <span className={styles["page-container__left__names__type"]} >
                      {page.type}
                    </span>
                  </div>
                </div>
                <div className={styles["page-container__right"]} >
                  <button className={styles["page-container__right__btn"]} >
                    <StarSvgComponent active={false} />
                  </button>
                </div>
              </div>
              {i + 1 !== pages.length && <hr className={styles["line"]} />}
            </React.Fragment>
          )
        }
      </div>
    </div>
  );
};



export default FavouritePages;