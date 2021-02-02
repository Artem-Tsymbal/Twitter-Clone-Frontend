import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './contracts/actionTypes';
import { LoadingState, ITweetsState, AddTweetFormState } from './contracts/state';

const initialTweetsState: ITweetsState = {
  items: [],
  addTweetFormState: AddTweetFormState.NEVER,
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<ITweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
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
      // TODO: think which status to choose if tweet was added
      draft.addTweetFormState = AddTweetFormState.LOADING;
      break;

    default:
      break;
  }
}, initialTweetsState);
