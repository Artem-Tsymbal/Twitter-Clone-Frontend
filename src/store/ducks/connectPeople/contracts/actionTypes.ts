import { Action } from 'redux';
import { IUser } from '../../user/contracts/state';

export enum ConnectPeopleActionsTypes {
  FETCH_CONNECT_PEOPLE = 'connct_people/FETCH_CONNECT_PEOPLE',
  SET_CONNECT_PEOPLE = 'connct_people/SET_CONNECT_PEOPLE',
}

export interface IFetchConnectPeopleAction extends Action<ConnectPeopleActionsTypes> {
  type: ConnectPeopleActionsTypes.FETCH_CONNECT_PEOPLE;
}

export interface ISetConnectPeopleAction extends Action<ConnectPeopleActionsTypes> {
  type: ConnectPeopleActionsTypes.SET_CONNECT_PEOPLE;
  payload: IUser[];
}
