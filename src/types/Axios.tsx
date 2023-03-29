import { AxiosResponse } from 'axios';

export type AxiosType = {
  get: <T>(path: string) => Promise<AxiosResponse<T>>;
};
