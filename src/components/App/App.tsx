import React, { lazy, useEffect } from 'react';
import {
  Routes, Route, useLocation, useNavigate, useSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as CookieHelper from '@helpers/Cookie';

import NotFound from '@components/NotFound/NotFound';
import Layout from '@components/Layout/Layout';
import Login from '@components/Login/Login';

import { login } from '@actions/authActions';
import { getSelf, TUser } from '@actions/userActions';
import { loginUser } from '@store/actions/userActions';

import './App.scss';
import 'normalize.css';

const Dashboard = lazy(() => import('@components/Dashboard/Dashboard'));
const Settings = lazy(() => import('@components/Settings/Settings'));

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = CookieHelper.get('appSessionJwt');
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  useEffect(() => {
    if (!auth && location.pathname !== '/login') navigate('/login');
    if (auth && location.pathname === '/login') navigate('/');
    if (!auth && code && location.pathname !== '/settings') {
      login({ code }).then((jwt) => {
        CookieHelper.set('appSessionJwt', jwt, {});
        navigate('/', { replace: true });
      });
    }
    if (auth && location.pathname !== '/login') {
      getSelf().then((user: TUser) => dispatch(loginUser(user)));
    }
  }, [auth, location, code]);

  useSearchParams(location.search);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
