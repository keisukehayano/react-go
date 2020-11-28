import { JSObject } from '../types/Common';
import { ApiClient } from '../apiClient';

// リクエスト先のURL
const baseURL = 'https://www.googleapis.com/books/v1';

// apiClientインスタンス作成
const apiClient = new ApiClient(baseURL);

const VOLUME_PATH = '/volumes';

export class VolumeApi {
  static get(params: JSObject): Promise<unknown> {
    return apiClient.get(VOLUME_PATH, params);
  }
}
