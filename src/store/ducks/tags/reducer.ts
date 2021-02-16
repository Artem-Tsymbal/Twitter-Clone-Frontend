import produce, { Draft } from 'immer';
import { TagsActions, TagsActionsType } from './actionCreators';
import { ITagsState } from './contracts/state';
import { LoadingStatus } from '../types';

const initialTagsState: ITagsState = {
  items: [],
  loadingState: LoadingStatus.NEVER,
};

export const tagsReducer = produce((draft: Draft<ITagsState>, action: TagsActions) => {
  switch (action.type) {
    case TagsActionsType.FETCH_TAGS:
      draft.items = [];
      draft.loadingState = LoadingStatus.LOADING;
      break;
    case TagsActionsType.SET_TAGS:
      draft.items = action.payload;
      draft.loadingState = LoadingStatus.LOADED;
      break;
    case TagsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTagsState);
