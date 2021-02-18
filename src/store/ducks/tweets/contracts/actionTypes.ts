import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { AddTweetFormState, ITweetsState, ITweet } from './state';

export enum TweetsActionsType {
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
  ADD_TWEET = 'tweets/ADD_TWEET',
  REMOVE_TWEET = 'tweets/REMOVE_TWEET',
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface ISetTweetsLoadingState extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface ISetAddTweetFormState extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ADD_FORM_STATE;
  payload: AddTweetFormState;
}

export interface SetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: ITweetsState['items'];
}

export interface IFetchAddTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: { text: string, images: string[] };
}

export interface IAddTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: ITweet;
}

export interface IRemoveTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.REMOVE_TWEET;
  payload: string;
}

export type TweetsActions =
  | IFetchTweetsAction
  | ISetTweetsLoadingState
  | SetTweetsAction
  | IFetchAddTweetAction
  | IAddTweetAction
  | IRemoveTweetAction
  | ISetAddTweetFormState;

