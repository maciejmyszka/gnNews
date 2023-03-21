import axios from 'axios';

export const useAxios = () => {
  const get = (url: string) =>
    axios
      .get(url)
      .then((res: any) => {
        if (res?.isAxiosError) throw res;
        return res.data;
      })
      .catch((err) => err.response.data);

  return { get };
};
