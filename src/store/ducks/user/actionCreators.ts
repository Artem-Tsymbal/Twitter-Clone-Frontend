import {
  IFetchSignInAction,
  ISetLoadingStatusAction,
  ISetUserAction,
  UserActionsType,
} from './contracts/actionTypes';
import { ILoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { IUserState } from './contracts/state';

export const fetchSignIn = (payload: ILoginFormProps): IFetchSignInAction => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const setLoadingStatus = (payload: IUserState['status']): ISetLoadingStatusAction => ({
  type: UserActionsType.SET_LOADING_STATUS,
  payload,
});

export const setUserData = (payload: IUserState['data']): ISetUserAction => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export type UserActions = IFetchSignInAction | ISetLoadingStatusAction | ISetUserAction;
