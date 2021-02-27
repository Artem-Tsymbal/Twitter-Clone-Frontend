import produce, { Draft } from 'immer';
import { TweetActions } from './actionCreators';
import { TweetActionsType } from './contracts/actionTypes';
import { ITweetState } from './contracts/state';
import { LoadingStatus } from '../../types';

const initialTweetState: ITweetState = {
  data: undefined,
  loadingState: LoadingStatus.NEVER,
};

export const tweetReducer = produce((draft: Draft<ITweetState>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingStatus.LOADING;
      break;
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingStatus.LOADED;
      break;
    case TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTweetState);
