import { LoadingStatus } from "../../types";

export enum AddTweetFormState {
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
  loadingState: LoadingStatus;
  addTweetFormState: AddTweetFormState;
}
