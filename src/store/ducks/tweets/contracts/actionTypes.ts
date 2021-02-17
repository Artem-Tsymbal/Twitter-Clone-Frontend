import { Action } from 'redux';
import { LoadingState, AddTweetFormState, ITweetsState, ITweet } from './state';

export enum TweetsActionsType {
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
  ADD_TWEET = 'tweets/ADD_TWEET',
}

export interface IFetchTweetsActionInteface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface ISetTweetsLoadingStateInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface ISetAddTweetFormStateInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ADD_FORM_STATE;
  payload: AddTweetFormState;
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: ITweetsState['items'];
}

export interface IFetchAddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: { text: string, images: string[] };
}

export interface IAddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: ITweet;
}

export type TweetsActions =
  | IFetchTweetsActionInteface
  | ISetTweetsLoadingStateInterface
  | SetTweetsActionInterface
  | IFetchAddTweetActionInterface
  | IAddTweetActionInterface
  | ISetAddTweetFormStateInterface;

