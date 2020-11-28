import { put, takeLatest } from 'redux-saga/effects';

import { GoJsonServerActions } from '../actions/goServer';
import { GojsonVolumeList } from '../models/Volume';
import { GoServerVolumeApi } from '../apiClient/goServerApi';

function* getVolumes(action: ReturnType<typeof GoJsonServerActions.getGoVolumes>) {
  // Request params 定義

  // payloadから受け取り
  const countryName = action.payload.countryName;
  const cityName = action.payload.cityName;
  const language = action.payload.language;

  // queryparams定義
  const params = { countryName: countryName, cityName: cityName, language: language };

  // 通信結果受け取り
  const response = yield GoServerVolumeApi.get(params);

  console.log("レスポンス受け取り:" + JSON.stringify(response))

  // 成功したらsetAction
  if (response.isSuccess) {
    yield put(GoJsonServerActions.setGoVolumes(GojsonVolumeList.fromResponse(response.data)));
  }
}

export function* GoServerSaga() {
  yield takeLatest(GoJsonServerActions.getGoVolumes, getVolumes);
}
