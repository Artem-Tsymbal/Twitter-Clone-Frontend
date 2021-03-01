import { LoadingStatus } from "../../../types";

export enum AddTweetFormStatus {
  ADDED = 'ADDED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface ITweet {
  _id: string;
  text: string;
  createdAt: string;
  images?: [];
  user: {
    fullName: string;
    username: string;
    avatarUrl: string;
  };
}

export interface ITweetsState {
  items: ITweet[];
  loadingStatus: LoadingStatus;
  addTweetFormStatus: AddTweetFormStatus;
}
