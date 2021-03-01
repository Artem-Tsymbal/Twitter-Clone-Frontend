import { RootState } from '../../store';
import { ITweet } from '../tweets/contracts/state';
import { LoadingStatus } from '../../types';
import { ITweetState } from './contracts/state';

export const selectStateOfTweet = (state: RootState): ITweetState => state.tweet;

export const selectLoadingStatus = (state: RootState): LoadingStatus => selectStateOfTweet(state).loadingStatus;

export const selectStatusOfTweetIsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectStatusOfTweetIsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectDataOfTweet = (state: RootState): ITweet | undefined => selectStateOfTweet(state).data;
