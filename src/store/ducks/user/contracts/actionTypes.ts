import { Action } from 'redux';
import { IUser } from './state';
import { LoadingStatus } from '../../types';
import { ILoginFormProps } from '../../../../pages/SignIn/components/LoginModal';
import { IRegisterFormProps } from '../../../../pages/SignIn/components/RegisterModal';

export enum UserActionsType {
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
  SIGN_OUT = 'user/SIGN_OUT',
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
  SET_LOADING_STATUS = 'tweet/SET_LOADING_STATUS',
  SET_USER_DATA = 'user/SET_USER_DATA',
}

export interface IFetchSignInAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN,
  payload: ILoginFormProps,
}

export interface IFetchSignUpAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_UP,
  payload: IRegisterFormProps,
}

export interface ISignOutAction extends Action<UserActionsType> {
  type: UserActionsType.SIGN_OUT,
}


export interface IFetchUserDataAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA,
}

export interface ISetLoadingStatusAction extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface ISetUserAction extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: IUser | undefined;
}
