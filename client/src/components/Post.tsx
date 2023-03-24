import { useMemo } from "react";
import styles from "../styles/componentStyles/post.module.scss";
import CommentsSvg from "./svg/CommentsSvg";
import HeartSvg from "./svg/HeartSvg";
import ShareSvg from "./svg/ShareSvg";

export interface PostProps {
  userName: string,
  userImageSrc: string,
  date: string,
  postData: string,
  peopleWhoLiked: { name: string, imageSrc: string }[],
  comments: Object[], //TODO
  shares: Object[], //TODO
}

const Post = ({ userName, date, postData, peopleWhoLiked, comments, shares, userImageSrc }: PostProps) => {

  const text = useMemo(() => {
    switch (peopleWhoLiked.length) {
      case 0: return "";
      case 1: return <span><b>{peopleWhoLiked[0].name}</b> likes this</span>;
      case 2: return <span><b>{peopleWhoLiked[0].name}</b> and <b>{peopleWhoLiked[1].name}</b> like this</span>;
      default:
        return <span>
          <b>
            {peopleWhoLiked[0].name}</b> , <b>{peopleWhoLiked[1].name}{" "}
          </b>
          and
          <b> {peopleWhoLiked.length - 2}{" "} others
          </b>
          {" "}like this
        </span>;
    }
  }, [peopleWhoLiked.length, peopleWhoLiked[0], peopleWhoLiked[1]]);

  return (
    <div className={styles["main"]} >
      <div className={styles["top"]} >
        <div className={styles["top__left"]} >
          <div className={styles["top__left__image-container"]} >
            <img
              className={styles["top__left__image-container__image"]}
              src={userImageSrc}
              alt="user image"
            />
          </div>
          <div className={styles["top__left__info"]} >
            <span className={styles["top__left__info__name"]} >
              {userName}
            </span>
            <span className={styles["top__left__info__time"]} >
              {date}
            </span>
          </div>
        </div>
        <div className={styles["top__right"]} >
          {/* TODO if user is owner of the post, three dots button, which can modify (or delete) post */}
        </div>
      </div>
      <div className={styles["middle"]} >
        {postData}
      </div>
      <hr className={styles["line"]} />
      <div className={styles["bottom"]} >
        <div className={styles["bottom__left"]}>
          <div className={styles["bottom__left__likes"]} >
            <HeartSvg fill={"none"} stroke={"gray"} strokeWidth={2} width={"25px"} height={"100%"} />
            <span className={styles["bottom__left__likes__count"]} >
              {/*  TODO   */}{8}
            </span>
          </div>
          <div className={styles["bottom__left__people-who-liked"]}>
            <div className={styles["bottom__left__people-who-liked__photos"]}>
              {peopleWhoLiked.map((person, i) =>
                <img
                  key={i}
                  src={person.imageSrc}
                  style={{ position: "relative", right: `${i * 12}px` }}
                  className={styles["bottom__left__people-who-liked__photos__photo"]}
                />
              )}
            </div>
            <span className={styles["bottom__left__people-who-liked__names"]} >
              {text}
            </span>
          </div>
        </div>
        <div className={styles["bottom__right"]}>
          <div className={styles["comments"]} >
            <CommentsSvg
              fill={"none"}
              stroke={"rgb(254, 91, 56)"}
              strokeWidth={2}
              width={"30px"}
              height={"100%"} />
          </div>
          <div className={styles["shares"]} >
            <ShareSvg
              width={"26px"}
              height={"100%"}
              fill={"none"}
              stroke={"rgb(254, 91, 56)"}
              stroke2={"rgb(254, 91, 56)"}
              stroke3={"rgb(254, 91, 56)"}
              strokeWidth={2}
              strokeWidth2={2}
              strokeWidth3={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;