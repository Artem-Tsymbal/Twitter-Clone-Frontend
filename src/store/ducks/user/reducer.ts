import produce, { Draft } from 'immer';
import { UserActions } from './actionCreators';
import { UserActionsType } from './contracts/actionTypes';
import { IUserState } from './contracts/state';
import { LoadingStatus } from '../types';

const initialTweetState: IUserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<IUserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA:
      draft.data = action.payload;
      draft.status = LoadingStatus.SUCCESS;
      break;
    case UserActionsType.SET_LOADING_STATUS:
      draft.status = action.payload;
      break;
    case UserActionsType.SIGN_OUT:
      draft.data = undefined;
      draft.status = LoadingStatus.NEVER;
      break;

    default:
      break;
  }
}, initialTweetState);
