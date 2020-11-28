import { AxiosError } from 'axios';

// AxiosResponse
export type AxiosResponse<T> = {
  data?: T;
  error?: AxiosError;
  isSuccess: boolean;
};
