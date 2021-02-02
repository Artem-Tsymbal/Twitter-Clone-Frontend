import { RootState } from '../../store';
import { LoadingState, ITweetState } from './contracts/state';

export const selectTweet = (state: RootState): ITweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetData = (state: RootState): ITweetState['data'] => selectTweet(state).data;
