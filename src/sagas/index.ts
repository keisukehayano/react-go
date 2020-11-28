import { all, fork } from 'redux-saga/effects';

import { GoogleBooksSaga } from './googleBooks';
import { GoServerSaga } from './goServer';

export const rootSaga = function* root() {
  yield all([fork(GoogleBooksSaga)]);
  yield all([fork(GoServerSaga)]);
};
