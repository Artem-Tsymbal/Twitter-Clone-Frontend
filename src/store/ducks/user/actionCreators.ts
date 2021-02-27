import {
  IFetchSignInAction,
  IFetchSignUpAction,
  IFetchDataOfUserAction,
  ISetLoadingStatusAction,
  ISetDataOfUserAction,
  ISignOutAction,
  UserActionsType,
} from './contracts/actionTypes';
import { IUserState } from './contracts/state';
import { ILoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { IRegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';

export const setLoadingStatusOfUser = (payload: IUserState['status']): ISetLoadingStatusAction => ({
  type: UserActionsType.SET_LOADING_STATUS_OF_USER,
  payload,
});

export const fetchSignUp = (payload: IRegisterFormProps): IFetchSignUpAction => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const fetchSignIn = (payload: ILoginFormProps): IFetchSignInAction => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const signOut = (): ISignOutAction => ({
  type: UserActionsType.SIGN_OUT,
});

export const fetchDataOfUser = (): IFetchDataOfUserAction => ({
  type: UserActionsType.FETCH_DATA_OF_USER,
});

export const setDataOfUser = (payload: IUserState['data']): ISetDataOfUserAction => ({
  type: UserActionsType.SET_DATA_OF_USER,
  payload,
});

export type UserActions =
  IFetchSignInAction |
  IFetchSignUpAction |
  IFetchDataOfUserAction |
  ISetLoadingStatusAction |
  ISignOutAction |
  ISetDataOfUserAction;
