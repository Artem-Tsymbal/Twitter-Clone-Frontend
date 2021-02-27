import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { ITagsState } from './contracts/state';
import { LoadingStatus } from '../../types';

export const selectTags = (state: RootState): ITagsState => state.tags;

export const selectLoadingState = (state: RootState): LoadingStatus => selectTags(state).loadingState;

export const selectAreTagsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADING;

export const selectAreTagsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADED;

export const selectTagsItems = createSelector(selectTags, tags => tags.items);
