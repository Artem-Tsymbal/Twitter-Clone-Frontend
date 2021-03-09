import { LoadingStatus } from '../../../types';

export interface IUser {
  _id?: string;
  email: string;
  fullName: string;
  username: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  biography?: string;
  background?: string;
  avatar?: string;
}

export interface IUpdateDataOfUser {
  fullName?: string;
  biography?: string;
  background?: File | string;
  avatar?: File | string;
}

export interface IUserState {
  data: IUser | undefined;
  loadingStatus: LoadingStatus;
}
