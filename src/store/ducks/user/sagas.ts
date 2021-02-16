import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoadingStatus, setUserData } from './actionCreators';
import { IFetchSignInAction, UserActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../types';
import { AuthApi } from '../../../services/api/authApi';

export function* fetchSignInRequest({ payload }: IFetchSignInAction): SagaIterator {
  try {
    const { data } = yield call(AuthApi.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga(): SagaIterator {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
