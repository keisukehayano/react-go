import actionCreatorFactory from 'typescript-fsa';

import { VolumeList } from '../models/Volume';

// action定義

// actionCreatorFactory(GoogleBooks用)
const actionCreator = actionCreatorFactory('GoogleBooks');

// GoogleBooksのアクション定義
export const GoogleBooksActions = {
  // getVolumesの定義
  getVolumes: actionCreator<string>('getVolumes'),
  // setVolumesの定義
  setVolumes: actionCreator<VolumeList>('setVolumes'),
  // setIsSearchingの定義
  setIsSearching: actionCreator<boolean>('setIsSearching'),
};
