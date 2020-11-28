import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import { AxiosResponse } from '../types/responses/axios';

// API Client
export class ApiClient {
  axiosInstance: AxiosInstance;
  constructor(baseURL = '') {
    this.axiosInstance = axios.create({ baseURL });

    this.axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        return config;
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      },
    );
  }

  // async GET
  // 引数 params={クエリパラメタ} path={追加パス}
  async get<T>(path: string, params = {}): Promise<AxiosResponse<T>> {
    try {
      // インスタンスを使用してクエリする
      const result = await this.axiosInstance.get(path, { params });
      // リクエスト成功
      return this.createSuccessPromise<T>(result.data);
    } catch (e) {
      // リクエスト失敗
      return this.createFailurePromise<T>(e);
    }
  }

  // async POST
  async post<T>(path: string, params = {}): Promise<AxiosResponse<T>> {
    try {
      // インスタンスを使用してクエリする
      const result = await this.axiosInstance.post(path, { params });
      // リクエスト成功
      return this.createSuccessPromise<T>(result.data);
    } catch (e) {
      // リクエスト失敗
      return this.createFailurePromise<T>(e);
    }
  }

  // async PUT
  async put<T>(path: string, params = {}): Promise<AxiosResponse<T>> {
    try {
      // インスタンスを使用してクエリする
      const result = await this.axiosInstance.put(path, { params });
      //リクエスト成功
      return this.createSuccessPromise<T>(result.data);
    } catch (e) {
      // リクエスト失敗
      return this.createFailurePromise<T>(e);
    }
  }

  // async DELETE
  async delete<T>(path: string): Promise<AxiosResponse<T>> {
    try {
      // インスタンスを使用してクエリする
      const result = await this.axiosInstance.delete(path);
      //リクエスト成功
      return this.createSuccessPromise<T>(result.data);
    } catch (e) {
      //リクエスト失敗
      return this.createFailurePromise<T>(e);
    }
  }

  //async PATCH
  async patch<T>(path: string, params = {}): Promise<AxiosResponse<T>> {
    try {
      // インスタンスを使用してクエリする
      const result = await this.axiosInstance.patch(path, params);
      // リクエスト成功
      return this.createSuccessPromise<T>(result.data);
    } catch (e) {
      // リクエスト失敗
      return this.createFailurePromise<T>(e);
    }
  }

  // 成功
  private createSuccessPromise<T>(data: T): Promise<AxiosResponse<T>> {
    return Promise.resolve<AxiosResponse<T>>({ data, isSuccess: true });
  }

  // 失敗
  private createFailurePromise<T>(error: AxiosError): Promise<AxiosResponse<T>> {
    return Promise.resolve<AxiosResponse<T>>({ error, isSuccess: false });
  }
}
