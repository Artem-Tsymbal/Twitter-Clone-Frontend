import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddTweetFormState, LoadingState } from './contracts/state';
import { addTweet, setAddTweetFormState, setTweets, setTweetsLoadingState } from './actionCreators';
import { IFetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';

export function* fetchTweetsRequest(): SagaIterator {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetActionInterface): SagaIterator {
  try {
    const item = yield call(TweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddTweetFormState(AddTweetFormState.ERROR));
  }
}

export function* tweetsSaga(): SagaIterator {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
