import { Action } from 'redux';
import { LoadingState, ITweetsState } from './contracts/state';

export enum TweetsActionsType {
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  SET_TWEETS = 'tweets/SET_TWEETS',
}

export interface IFetchTweetsActionInteface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface ISetTweetsLoadingStateInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: ITweetsState['items'];
}

export const fetchTweets = (): IFetchTweetsActionInteface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const setTweets = (payload: ITweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export type TweetsActions = IFetchTweetsActionInteface | ISetTweetsLoadingStateInterface | SetTweetsActionInterface;
