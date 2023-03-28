import styles from "../../styles/profileRouteStyles/profileRouteBody.module.scss";
import Post, { PostProps } from "../Post";
import BlogPosts, { ProfileRouteBlog } from "./BlogPosts";
import FriendsList, { ProfileRouteFriend } from "./FriendsList";
import Photos from "./Photos";
import ProfileIntro, { ProfileIntroInformation, ProfileIntroNetwork } from "./ProfileIntro";
import ProfileRouteUserPanel from "./ProfileRouteUserPanel";
import profilePicture from "../../assets/images/profile_picture.jpg";
import FavouritePages from "./FavouritePages";
import PostList from "./PostList";
import ProfileRouteStore from "../../stores/ProfileRouteStore";

export interface ProfileRouteBodyProps {
  store: ProfileRouteStore,
}

const ProfileRouteBody = ({ store }: ProfileRouteBodyProps) => {
  return (
    <div className={styles["main"]} >
      <ProfileRouteUserPanel />
      <div className={styles["bottom"]} >
        <div className={styles["bottom__left"]}>
          <ProfileIntro content={testInformation} networks={testNetworks} />
        </div >
        <div className={styles["bottom__middle"]} >
          <PostList posts={testPostList} />
        </div>
        <div className={styles["bottom__right"]} >
          <Photos photos={testPhotos} />
          <BlogPosts blogs={testBlogs} />
          <FriendsList friends={testFriends} />
          <FavouritePages pages={testFavouritePages} />
        </div>
      </div>
    </div>
  );
};

const testInformation: ProfileIntroInformation[] = [
  {
    title: "Test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cupiditate, vitae, itaque maiores.",
    key: 1
  },
  {
    title: "Test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cupiditate, vitae, itaque maiores.",
    key: 2
  },
  {
    title: "Test",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cupiditate, vitae, itaque maiores.",
    key: 3
  },
];

const testNetworks: ProfileIntroNetwork[] = [
  {
    networkName: "Facebook",
    link: "https://www.facebook.com/saba.samxaradze.750"
  },
  {
    networkName: "Instagram",
    link: "https://www.instagram.com/sprite_enjoyerr/"

  },
  {
    networkName: "Twitter",
    link: "https://twitter.com/sprite__enjoyer"
  }
];
const testPhotos: { src: string, alt: string }[] = [
  { src: "https://ychef.files.bbci.co.uk/976x549/p02k33hl.jpg", alt: "mona lisa" },
  { src: "https://the-decoder.com/wp-content/uploads/2022/09/mona_lisa_dall_e_2_title.jpg", alt: "mona lisa" },
];

const testBlogs: ProfileRouteBlog[] = [
  {
    title: "title1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit minima aliquid",
    relativeTime: "10 hours ago"
  },
  {
    title: "title2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit minima aliquid",
    relativeTime: "2 hours ago"
  },
  {
    title: "title3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit minima aliquid",
    relativeTime: "1 year ago"
  },

];

const testFriends: ProfileRouteFriend[] = [
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
  {
    imageSrc: "http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg",
    imageAlt: "friend picture",
    friendName: "Leonardo da vinci",
    link: "/profile/username"
  },
];

const testFavouritePages = [
  {
    name: "some page",
    type: "bar/restaurant",
    imageSrc: "https://i.pinimg.com/originals/af/b1/8a/afb18a87a1158781fe9a364444532c37.png",
    imageAlt: "page logo",
  },
  {
    name: "some page",
    type: "bar/restaurant",
    imageSrc: "https://i.pinimg.com/originals/af/b1/8a/afb18a87a1158781fe9a364444532c37.png",
    imageAlt: "page logo",
  },
  {
    name: "some page",
    type: "bar/restaurant",
    imageSrc: "https://i.pinimg.com/originals/af/b1/8a/afb18a87a1158781fe9a364444532c37.png",
    imageAlt: "page logo",
  },
  {
    name: "some page",
    type: "bar/restaurant",
    imageSrc: "https://i.pinimg.com/originals/af/b1/8a/afb18a87a1158781fe9a364444532c37.png",
    imageAlt: "page logo",
  },
  {
    name: "some page",
    type: "bar/restaurant",
    imageSrc: "https://i.pinimg.com/originals/af/b1/8a/afb18a87a1158781fe9a364444532c37.png",
    imageAlt: "page logo",
  },
];

const testPostList: PostProps[] = [
  {
    userName: "Mona Lisa",
    date: "October 25, 2022",
    postData: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia beatae dolorum recusandae esse. Cum expedita cumque nemo, quis praesentium quisquam sit ipsa modi facilis ab in laborum impedit, ratione voluptatem! Corrupti voluptatum eveniet, delectus nostrum blanditiis nobis veniam quasi quas eum amet fugit, cum atque! Error, atque excepturi! Est, cumque!",
    peopleWhoLiked: [
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },

    ],
    comments: [{}],
    shares: [{}],
    userImageSrc: profilePicture
  },
  {
    userName: "Mona Lisa",
    date: "October 25, 2022",
    postData: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.",
    peopleWhoLiked: [
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },

    ],
    comments: [{}],
    shares: [{}],
    userImageSrc: profilePicture
  },
  {
    userName: "Mona Lisa",
    date: "October 25, 2022",
    postData: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.",
    peopleWhoLiked: [
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },

    ],
    comments: [{}],
    shares: [{}],
    userImageSrc: profilePicture
  },
  {
    userName: "Mona Lisa",
    date: "October 25, 2022",
    postData: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.",
    peopleWhoLiked: [
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },

    ],
    comments: [{}],
    shares: [{}],
    userImageSrc: profilePicture
  },
  {
    userName: "Mona Lisa",
    date: "October 25, 2022",
    postData: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.",
    peopleWhoLiked: [
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },
      {
        name: "jenna annej",
        imageSrc: "https://i.stack.imgur.com/9Evvf.png?s=192&g=1",
      },

    ],
    comments: [{}],
    shares: [{}],
    userImageSrc: profilePicture
  },

];



export default ProfileRouteBody;