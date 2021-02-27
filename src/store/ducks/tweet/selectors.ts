import { RootState } from '../../store';
import { ITweet } from '../tweets/contracts/state';
import { LoadingStatus } from '../../types';
import { ITweetState } from './contracts/state';

export const selectTweet = (state: RootState): ITweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingStatus => selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADED;

export const selectTweetData = (state: RootState): ITweet | undefined => selectTweet(state).data;
