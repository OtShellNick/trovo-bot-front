import axios from 'axios';
import * as CookieHelper from '@helpers/Cookie';
import CONFIG from '@config/config';

// @ts-ignore
// eslint-disable-next-line no-undef
const { server } = CONFIG[MODE];

const Server = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: object,
) => {
  axios.defaults.headers.common.authorization = CookieHelper.get('appSessionJwt') || '';

  if (method === 'get' && data) {
    data = {
      params: {
        data,
      },
    };
  }
  return axios[method](`${server}${url}`, data).then((resp) => {
    if (resp.status === 200) return resp.data;
    return resp;
  });
};

export default Server;
