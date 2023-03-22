import { Fragment } from "react";
import styles from "../../styles/profileRouteStyles/favouritePages.module.scss";
import StarSvg from "../svg/StarSvg";
import ProfileComponentTitle from "./ProfileComponentTitle";
export interface FavouritePagesProps {
  pages: {
    name: string,
    type: string,
    imageSrc: string,
    imageAlt: string,
  }[],
}

const FavouritePages = ({ pages }: FavouritePagesProps) => {

  return (
    <div className={styles["main"]} >
      <ProfileComponentTitle title="Favourite Pages" />
      <div className={styles["content"]} >
        {
          pages.map((page, i) =>
            <Fragment key={i}>
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
                    <StarSvg fill={"white"} stroke={"orange"} strokeWidth={2} width={"20"} height={"100%"} />
                  </button>
                </div>
              </div>
              {i + 1 !== pages.length && <hr className={styles["line"]} />}
            </Fragment>
          )
        }
      </div>
    </div>
  );
};



export default FavouritePages;