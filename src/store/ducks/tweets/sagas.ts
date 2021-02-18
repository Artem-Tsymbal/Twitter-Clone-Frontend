import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddTweetFormState } from './contracts/state';
import { addTweet, setAddTweetFormState, setTweets, setTweetsLoadingState } from './actionCreators';
import { IFetchAddTweetAction, IRemoveTweetAction, TweetsActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../types';

export function* fetchTweetsRequest(): SagaIterator {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingStatus.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetAction): SagaIterator {
  try {
    const item = yield call(TweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddTweetFormState(AddTweetFormState.ERROR));
  }
}

export function* fetchRemoveTweetRequest({ payload }: IRemoveTweetAction): SagaIterator {
  try {
    yield call(TweetsApi.removeTweet, payload);
  } catch (error) {
    alert(error);
  }
}

export function* tweetsSaga(): SagaIterator {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
  yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
