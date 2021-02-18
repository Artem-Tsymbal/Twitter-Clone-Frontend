import { RootState } from '../../store';
import { LoadingStatus } from '../types';
import { ITweetsState, AddTweetFormState, ITweet } from './contracts/state';

export const selectTweetsState = (state: RootState): ITweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingStatus =>
  selectTweetsState(state).loadingState;

export const selectAddTweetFormState = (state: RootState): AddTweetFormState =>
  selectTweetsState(state).addTweetFormState;

export const selectAreTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADING;

export const selectAreTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADED;

export const selectTweetsItems = (state: RootState): ITweet[] => selectTweetsState(state).items;
