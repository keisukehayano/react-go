import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

import { GoogleBooksState, googleBooksReducer } from '../reducers/GoogleBooks';
import { GoServerState, goServerReducer } from '../reducers/GoServer';
//ReducerをまとめるrootReducer定義

//interfaceを定義
export interface State {
  router: RouterState;
  googleBooks: GoogleBooksState;
  goServer: GoServerState;
}

//connectRouterの引数にhistoryが必要なのでrootReduserの引数で渡す
export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    googleBooks: googleBooksReducer,
    goServer: goServerReducer,
  });
