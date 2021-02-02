import produce, { Draft } from 'immer';
import { TweetActions } from './actionCreators';
import { TweetActionsType } from './contracts/actionTypes';
import { LoadingState, ITweetState } from './contracts/state';

const initialTweetState: ITweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<ITweetState>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTweetState);
