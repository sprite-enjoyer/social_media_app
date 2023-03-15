import styles from "../../styles/profileRouteStyles/blogPosts.module.scss";
import ProfileComponentTitle from "./ProfileComponentTitle";

export interface ProfileRouteBlog {
  title: string,
  description: string,
  relativeTime: string
}

export interface BlogPostsProps {
  blogs: ProfileRouteBlog[];
}

const BlogPosts = ({ blogs }: BlogPostsProps) => {
  return (
    <div className={styles["main"]} >
      <ProfileComponentTitle title="Blog Posts" />
      <div className={styles["content"]} >
        {
          blogs.map((blog, i) =>
            <div key={i} className={styles["blog"]} >
              <span className={styles["blog__title"]} >
                {blog.title}
              </span>
              <div className={styles["blog__description"]} >
                {blog.description}
              </div>
              <span className={styles["blog__time"]} >
                {blog.relativeTime}
              </span>
              {i + 1 !== blogs.length && <hr className={styles["blog__line"]} />}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default BlogPosts;