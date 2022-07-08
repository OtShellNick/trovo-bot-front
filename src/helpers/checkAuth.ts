import * as CookieHelper from '@helpers/Cookie';

const checkAuth = ({ response: { data } }: any) => {
  const { code } = data;

  if (code === 401) {
    CookieHelper.del('appSessionJwt');
    if (window.location.pathname !== '/login') return window.location.replace('/login');
  }

  return data;
};

export default checkAuth;
