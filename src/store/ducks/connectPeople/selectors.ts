import { RootState } from '../../store';
import { IConnectPeopleState } from './contracts/state';

export const selectConnectPeopleItems = (state: RootState): IConnectPeopleState['items'] => state.connectProple.items;
