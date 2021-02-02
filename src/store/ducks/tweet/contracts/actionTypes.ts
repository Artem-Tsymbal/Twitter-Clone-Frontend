import { Action } from 'redux';
import { ITweet } from '../../tweets/contracts/state';
import { ITweetState, LoadingState } from '../contracts/state';

export enum TweetActionsType {
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
}

export interface IFetchTweetActionInteface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET_DATA;
  payload: string;
}

export interface ISetTweetLoadingStateInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface ISetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET_DATA;
  payload: ITweetState['data'];
}
