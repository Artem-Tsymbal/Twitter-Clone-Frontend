import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoadingStatus, setUserData } from './actionCreators';
import { IFetchSignInAction, IFetchSignUpAction, UserActionsType } from './contracts/actionTypes';
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

export function* fetchSignUpRequest({ payload }: IFetchSignUpAction): SagaIterator {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    yield call(AuthApi.signUp, payload);
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga(): SagaIterator {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
}
