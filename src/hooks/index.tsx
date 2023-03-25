import axios, { AxiosResponse } from 'axios';

export const useAxios = () => {
  const get = (url: string) =>
    axios
      .get(url)
      .then((res: AxiosResponse) => {
        if (res?.status !== 200) throw res;
        return res.data;
      })
      .catch((err) => err.response.data);

  return { get };
};
