// @ts-ignore
import { applyMiddleware, compose, createStore } from 'redux';
import { ITweetsState } from './ducks/tweets/contracts/state';
import { ITagsState } from './ducks/tags/contracts/state';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { ITweetState } from './ducks/tweet/contracts/state';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: ITweetsState;
  tweet: ITweetState;
  tags: ITagsState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
