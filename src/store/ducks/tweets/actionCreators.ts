import { LoadingStatus } from '../types';
import {
  IFetchTweetsAction,
  ISetTweetsLoadingState,
  ISetAddTweetFormState,
  IFetchAddTweetAction,
  IAddTweetAction,
  SetTweetsAction,
  TweetsActionsType,
  IRemoveTweetAction,
} from './contracts/actionTypes';
import { ITweetsState, ITweet, AddTweetFormState } from './contracts/state';

export const fetchTweets = (): IFetchTweetsAction => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingStatus): ISetTweetsLoadingState => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const setAddTweetFormState = (payload: AddTweetFormState): ISetAddTweetFormState => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export const fetchAddTweet = (payload: { text: string, images: string[] }): IFetchAddTweetAction => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: ITweet): IAddTweetAction => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const removeTweet = (payload: string): IRemoveTweetAction => ({
  type: TweetsActionsType.REMOVE_TWEET,
  payload,
});

export const setTweets = (payload: ITweetsState['items']): SetTweetsAction => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});
