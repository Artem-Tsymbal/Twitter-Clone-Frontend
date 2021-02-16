import { RootState } from '../../store';
import { LoadingStatus } from '../types';
import { IUserState } from './contracts/state';

export const selectUserState = (state: RootState): IUserState => state.user;

export const selectIsAuth = (state: RootState): boolean => !!selectUserState(state).data;

export const selectUserData = (state: RootState): IUserState['data'] | undefined => selectUserState(state).data;

export const selectUserStatus = (state: RootState): IUserState['status'] => selectUserState(state).status;

export const selectUserIsLoaded = (state: RootState): boolean =>
  selectUserState(state).status === LoadingStatus.LOADED;
