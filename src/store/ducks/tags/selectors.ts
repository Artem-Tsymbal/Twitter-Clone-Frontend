import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, ITagsState } from './contracts/state';

export const selectTags = (state: RootState): ITagsState => state.tags;

export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState;

export const selectAreTagsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectAreTagsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, tags => tags.items);
