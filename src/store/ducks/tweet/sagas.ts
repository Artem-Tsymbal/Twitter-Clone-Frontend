import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { ITweetState, LoadingState } from './contracts/state';
import { setTweetData, setTweetLoadingState } from './actionCreators';
import { IFetchTweetActionInteface, TweetActionsType } from './contracts/actionTypes';
import { ITweet } from '../tweets/contracts/state';

export function* fetchTweetDataRequest({ payload: tweetId }: IFetchTweetActionInteface) {
  try {
    const [data]: ITweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data));
  }
  catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
