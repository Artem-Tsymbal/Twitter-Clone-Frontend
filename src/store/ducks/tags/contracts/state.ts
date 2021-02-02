export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface ITag {
  _id: string;
  name: string;
  count: number;
}

export interface ITagsState {
  items: ITag[];
  loadingState: LoadingState;
}
