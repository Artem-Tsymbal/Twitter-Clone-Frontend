import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddTweetFormState, ITweet, LoadingState } from './contracts/state';
import { addTweet, setAddTweetFormState, setTweets, setTweetsLoadingState } from './actionCreators';
import { IFetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  }
  catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetActionInterface) {
  try {
    const data: ITweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullName: "Test user",
        username: "ivan",
        avatarUrl: "https://source.unsplash.com/random/100x100?2",
      }
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  }
  catch (error) {
    yield put(setAddTweetFormState(AddTweetFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
