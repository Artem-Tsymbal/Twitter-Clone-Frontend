import { RootState } from '../../store';
import { LoadingState, ITweetsState, AddTweetFormState, ITweet } from './contracts/state';

export const selectTweetsState = (state: RootState): ITweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweetsState(state).loadingState;

export const selectAddTweetFormState = (state: RootState): AddTweetFormState =>
  selectTweetsState(state).addTweetFormState;

export const selectAreTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectAreTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = (state: RootState): ITweet[] => selectTweetsState(state).items;
