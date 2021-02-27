import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoadingStatusOfUser, setDataOfUser } from './actionCreators';
import { IFetchSignInAction, IFetchSignUpAction, UserActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../../types';
import { AuthApi } from '../../../services/api/authApi';
import { useHistory } from 'react-router-dom';

export function* fetchSignUpRequest({ payload }: IFetchSignUpAction): SagaIterator {
  try {
    yield put(setLoadingStatusOfUser(LoadingStatus.LOADING));
    yield call(AuthApi.signUp, payload);
    yield put(setLoadingStatusOfUser(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatusOfUser(LoadingStatus.ERROR));
  }
}

export function* fetchSignInRequest({ payload }: IFetchSignInAction): SagaIterator {
  try {
    yield put(setLoadingStatusOfUser(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.signIn, payload);
    window.localStorage.setItem('token', data.token);
    window.localStorage.setItem('currentUser', JSON.stringify(data.user));
    yield put(setDataOfUser(data));
  } catch (error) {
    yield put(setLoadingStatusOfUser(LoadingStatus.ERROR));
  }
}

export function* fetchDataOfUserRequest(): SagaIterator {
  try {
    yield put(setLoadingStatusOfUser(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.getMe);
    yield put(setDataOfUser(data));
  } catch (error) {
    yield put(setLoadingStatusOfUser(LoadingStatus.ERROR));
  }
}

export function* userSaga(): SagaIterator {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
  yield takeLatest(UserActionsType.FETCH_DATA_OF_USER, fetchDataOfUserRequest);
}
