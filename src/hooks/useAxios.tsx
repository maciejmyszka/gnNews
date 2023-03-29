import axios from 'axios';
import { AxiosType } from 'types/Axios';

export const useAxios = () => {
  const api: AxiosType = {
    get: (path: string) => axios.get(path),
  };

  return { ...api };
};
