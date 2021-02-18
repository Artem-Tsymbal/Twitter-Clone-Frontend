import {
  IFetchSignInAction,
  IFetchSignUpAction,
  IFetchUserDataAction,
  ISetLoadingStatusAction,
  ISetUserAction,
  ISignOutAction,
  UserActionsType,
} from './contracts/actionTypes';
import { ILoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { IUserState } from './contracts/state';
import { IRegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';

export const fetchSignIn = (payload: ILoginFormProps): IFetchSignInAction => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const fetchSignUp = (payload: IRegisterFormProps): IFetchSignUpAction => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const signOut = (): ISignOutAction => ({
  type: UserActionsType.SIGN_OUT,
});

export const fetchUserData = (): IFetchUserDataAction => ({
  type: UserActionsType.FETCH_USER_DATA,
});

export const setLoadingStatus = (payload: IUserState['status']): ISetLoadingStatusAction => ({
  type: UserActionsType.SET_LOADING_STATUS,
  payload,
});

export const setUserData = (payload: IUserState['data']): ISetUserAction => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export type UserActions =
  IFetchSignInAction |
  IFetchSignUpAction |
  IFetchUserDataAction |
  ISetLoadingStatusAction |
  ISignOutAction |
  ISetUserAction;
