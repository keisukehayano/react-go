import actionCreateFactory from 'typescript-fsa';

import { GojsonVolumeList } from '../models/Volume';

const actionCreator = actionCreateFactory('GoJsonServer');

export const GoJsonServerActions = {
  // 型定義
  getGoVolumes: actionCreator<{ countryName: string; cityName: string; language: string }>('getGoVolumes'),
  setGoVolumes: actionCreator<GojsonVolumeList>('setGoVolumes'),
};
