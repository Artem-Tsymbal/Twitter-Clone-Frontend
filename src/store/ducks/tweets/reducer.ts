import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetsActions, TweetsActionsType } from './contracts/actionTypes';
import { ITweetsState, AddTweetFormState } from './contracts/state';

const initialTweetsState: ITweetsState = {
  items: [],
  addTweetFormState: AddTweetFormState.NEVER,
  loadingState: LoadingStatus.NEVER,
};

export const tweetsReducer = produce((draft: Draft<ITweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingStatus.LOADING;
      break;
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingStatus.LOADED;
      break;
    case TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addTweetFormState = AddTweetFormState.LOADING;
      break;
    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addTweetFormState = action.payload;
      break;
    case TweetsActionsType.ADD_TWEET:
      draft.items.push(action.payload);
      draft.addTweetFormState = AddTweetFormState.NEVER;
      break;
    case TweetsActionsType.REMOVE_TWEET:
      draft.items = draft.items.filter(item => item._id !== action.payload);
      break;

    default:
      break;
  }
}, initialTweetsState);
