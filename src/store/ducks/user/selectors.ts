import { RootState } from '../../store';
import { IUserState } from './contracts/state';

export const selectUserState = (state: RootState): IUserState => state.user;

export const selectUserData = (state: RootState): IUserState['data'] | undefined => selectUserState(state).data;

export const selectUserStatus = (state: RootState): IUserState['status'] => selectUserState(state).status;
