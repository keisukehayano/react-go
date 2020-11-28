import { JSObject } from '../types/Common';
import { ApiClient } from '../apiClient';

// goServerのURL
const baseURL = 'http://127.0.0.1:8080/';

// BaseURLを元にapiClientのインスタンスを作成
const apiClient = new ApiClient(baseURL);

//VolumeへのPath
const VOLUME_PATH = '';

export class GoServerVolumeApi {
  static get(params: JSObject): Promise<unknown> {
    return apiClient.get(VOLUME_PATH, params);
  }
}
