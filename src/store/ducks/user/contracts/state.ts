import { LoadingStatus } from '../../types';

export interface IUser {
  _id?: string;
  email: string;
  fullName: string;
  username: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  location?: string;
  about?: string;
  website?: string;
}

export interface IUserState {
  data: IUser | undefined;
  status: LoadingStatus;
}
