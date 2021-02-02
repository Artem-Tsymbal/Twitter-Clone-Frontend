export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}


export enum AddTweetFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface ITweet {
  _id: string;
  text: string;
  user: {
    fullName: string;
    username: string;
    avatarUrl: string;
  };
}

export interface ITweetsState {
  items: ITweet[];
  loadingState: LoadingState;
  addTweetFormState: AddTweetFormState;
}
