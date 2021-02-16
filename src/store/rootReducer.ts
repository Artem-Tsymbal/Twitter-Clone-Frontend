import { combineReducers } from 'redux';
import { tweetsReducer } from './ducks/tweets/reducer';
import { tweetReducer } from './ducks/tweet/reducer';
import { tagsReducer } from './ducks/tags/reducer';
import { userReducer } from './ducks/user/reducer';
import { connectPeopleReducer } from './ducks/connectedPeople/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
  user: userReducer,
  connectPeople: connectPeopleReducer,
});
