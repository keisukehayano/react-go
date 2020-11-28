import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { State, rootReducer } from './reducers';
import { rootSaga } from './sagas';

//storeのコンフィグ

//loggerを用意
const logger = createLogger();

// sagaを用意
const sagaMiddleware = createSagaMiddleware();

//ブラウザ履歴を記録するhistory
export const history = createBrowserHistory();

export function configureStore(preloadedState?: State) {
  //loggermiddlewareを定義
  const middlewares = [routerMiddleware(history), sagaMiddleware, logger];
  //middlewareを適用していく
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer(history), preloadedState, middlewareEnhancer);
  // rootSagaを動かす
  sagaMiddleware.run(rootSaga);
  return store;
}
