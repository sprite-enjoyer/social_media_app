import Post, { PostProps } from "../Post";

export interface PostListProps {
  posts: PostProps[],
}

const PostList = ({ posts }: PostListProps) => <>{posts.map((postData, i) => <Post key={i} {...postData} />)}</>


export default PostList;