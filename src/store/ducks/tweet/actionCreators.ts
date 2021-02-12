import {
  IFetchTweetActionInteface,
  ISetTweetLoadingStateInterface,
  ISetTweetActionInterface,
  TweetActionsType,
} from './contracts/actionTypes';
import { ITweetState, LoadingState } from './contracts/state';

export const fetchTweetData = (payload: string): IFetchTweetActionInteface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (payload: LoadingState): ISetTweetLoadingStateInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const setTweetData = (payload: ITweetState['data']): ISetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export type TweetActions = IFetchTweetActionInteface | ISetTweetLoadingStateInterface | ISetTweetActionInterface;
