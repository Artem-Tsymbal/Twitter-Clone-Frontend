import { IFetchTweetsActionInteface, ISetTweetsLoadingStateInterface, ISetAddTweetFormStateInterface, IFetchAddTweetActionInterface, IAddTweetActionInterface, SetTweetsActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { LoadingState, ITweetsState, ITweet, AddTweetFormState } from './contracts/state';

export const fetchTweets = (): IFetchTweetsActionInteface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const setAddTweetFormState = (payload: AddTweetFormState): ISetAddTweetFormStateInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export const fetchAddTweet = (payload: string): IFetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: ITweet): IAddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const setTweets = (payload: ITweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

