import { Action } from 'redux';
import { LoadingState, ITagsState } from './contracts/state';

export enum TagsActionsType {
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_TAGS = 'tags/SET_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface IFetchTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS;
}

export interface ISetTagsLoadingStateInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface ISetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS;
  payload: ITagsState['items'];
}

export const fetchTags = (): IFetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
});

export const setTagsLoadingState = (payload: LoadingState): ISetTagsLoadingStateInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
});

export const setTags = (payload: ITagsState['items']): ISetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
});

export type TagsActions = IFetchTagsActionInterface | ISetTagsLoadingStateInterface | ISetTagsActionInterface;
