import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LoadingStatus } from '../types';

export function* fetchConnectPeopleRequest(): SagaIterator {
  // try {
  //   const items = yield call(TagsApi.fetchTags);
  //   yield put(setTags(items));
  // } catch (error) {
  //   yield put(setTagsLoadingState(LoadingStatus.ERROR));
  // }
}

export function* connectPeopleSaga(): SagaIterator {
  // yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
