import { RootState } from '../../store';
import { LoadingStatus } from '../../types';
import { IUserState } from './contracts/state';

export const selectStateOfUser = (state: RootState): IUserState => state.user;

export const selectIsUserAuthed = (state: RootState): boolean => !!selectStateOfUser(state).data;

export const select2 = (state: RootState): any => selectStateOfUser(state).data;

export const selectDataOfUser = (state: RootState): IUserState['data'] | undefined => selectStateOfUser(state).data;

export const selectStatusOfUser = (state: RootState): IUserState['status'] => selectStateOfUser(state).status;

export const selectStatusOfUserIsLoaded = (state: RootState): boolean =>
  selectStateOfUser(state).status === LoadingStatus.LOADED;
