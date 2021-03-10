import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddTweetFormStatus } from './contracts/state';
import { addTweet, setAddTweetFormStatus, setDataOfTweets, setLoadingStatusOfTweets } from './actionCreators';
import { IFetchAddTweetAction, IRemoveTweetAction, TweetsActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../../types';
import { setLoadingStatusOfTweet } from '../tweet/actionCreators';

export function* fetchDataOfTweetsRequest(): SagaIterator {
  try {
    const { pathname } = window.location;
    const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
    const items = yield call(TweetsApi.fetchDataOfTweets, userId);
    yield put(setDataOfTweets(items));
  } catch (error) {
    yield put(setLoadingStatusOfTweets(LoadingStatus.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetAction): SagaIterator {
  try {
    const item = yield call(TweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddTweetFormStatus(AddTweetFormStatus.ERROR));
  }
}

export function* fetchRemoveTweetRequest({ payload }: IRemoveTweetAction): SagaIterator {
  try {
    yield call(TweetsApi.removeTweet, payload);
  } catch (error) {
    yield put(setLoadingStatusOfTweet(LoadingStatus.ERROR));
  }
}

export function* tweetsSaga(): SagaIterator {
  yield takeLatest(TweetsActionsType.FETCH_DATA_OF_TWEETS, fetchDataOfTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
  yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
