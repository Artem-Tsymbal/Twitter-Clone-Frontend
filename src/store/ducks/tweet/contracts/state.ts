import { ITweet } from "../../tweets/contracts/state";

export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface ITweetState {
  data?: ITweet;
  loadingState: LoadingState;
}
