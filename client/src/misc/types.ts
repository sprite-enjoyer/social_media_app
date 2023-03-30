export interface BaseSvgProps {
  fill: string,
  stroke: string,
  strokeWidth: number,
  width: string,
  height: string,
}

export interface ActivableSvgObjectWithProps {
  Component: (props: BaseSvgProps) => JSX.Element,
  activeProps: BaseSvgProps,
  notActiveProps: BaseSvgProps,
}

export interface PublicUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string | null;
  bio: string | null;
  birthDate: Date | null;
  location: string | null;
  website: string | null;
  createdAt: Date;
  updatedAt: Date;
  followedByIDs: string[];
  followingIDs: string[];
}