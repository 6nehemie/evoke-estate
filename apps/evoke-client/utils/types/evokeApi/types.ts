export interface RegisterResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  location: string | null;
  description: string | null;
  token: string;
}

export interface IUserState {
  id?: number;
  fullName: string;
  email: string;
  username: string;
  title?: string;
  location?: string;
  description?: string;
  avatar?: string;
}

export interface IPost {
  id: number;
  title: string;
  author: IAuthor;
  image: string;
  description: string;
  views: number;
  likedBy: IAuthor[];
}

export interface IAuthor {
  id: number;
  fullName: string;
  username: string;
  avatar: string;
  location: string;
  title: string;
  description: string;
}

export interface ISimpleUser {
  id: number;
  fullName: string;
  username: string;
  avatar: string;
  location: string;
  title: string;
  description: string;
  followers: IAuthor[];
  following: IAuthor[];
}
