import { IUser } from '../user/contracts/state';
import { ConnectPeopleActionsTypes, IFetchConnectPeopleAction, ISetConnectPeopleAction } from './contracts/actionTypes';

export const fetchConnectPeople = (): IFetchConnectPeopleAction => ({
  type: ConnectPeopleActionsTypes.FETCH_CONNECT_PEOPLE,
});

export const setConnectPeople = (payload: IUser[]): ISetConnectPeopleAction => ({
  type: ConnectPeopleActionsTypes.SET_CONNECT_PEOPLE,
  payload,
});

export type ConnectPeopleActions = IFetchConnectPeopleAction | ISetConnectPeopleAction;
