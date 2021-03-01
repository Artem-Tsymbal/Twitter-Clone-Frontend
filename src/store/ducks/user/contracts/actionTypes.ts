import { Action } from 'redux';
import { IUser } from './state';
import { LoadingStatus } from '../../../types';
import { IRegisterFormProps } from '../../../../screens/Login/components/RegisterModal';
import { ILoginFormProps } from '../../../../screens/Login/components/LoginModal';

export enum UserActionsType {
  SET_LOADING_STATUS_OF_USER = 'user/SET_LOADING_STATUS_OF_USER',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  SIGN_OUT = 'user/SIGN_OUT',
  FETCH_DATA_OF_USER = 'user/FETCH_DATA_OF_USER',
  SET_DATA_OF_USER = 'user/SET_DATA_OF_USER',
}

export interface ISetLoadingStatusOfUserAction extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATUS_OF_USER;
  payload: LoadingStatus;
}

export interface IFetchSignUpAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_UP,
  payload: IRegisterFormProps,
}

export interface IFetchSignInAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN,
  payload: ILoginFormProps,
}

export interface ISignOutAction extends Action<UserActionsType> {
  type: UserActionsType.SIGN_OUT,
}

export interface IFetchDataOfUserAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_DATA_OF_USER,
}

export interface ISetDataOfUserAction extends Action<UserActionsType> {
  type: UserActionsType.SET_DATA_OF_USER;
  payload: IUser | undefined;
}

export type UserActions =
  | IFetchSignInAction
  | IFetchSignUpAction
  | IFetchDataOfUserAction
  | ISetLoadingStatusOfUserAction
  | ISignOutAction
  | ISetDataOfUserAction;
