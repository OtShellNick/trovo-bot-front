import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import * as CookieHelper from '@helpers/Cookie';

import { RootState } from '@store/mainStore';
import { TUser } from '@actions/userActions';

import './Header.scss';
import { logout } from '@actions/authActions';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const jwt = CookieHelper.get('appSessionJwt');
  const navigate = useNavigate();
  const { user } = useSelector<RootState, { user: TUser }>((state) => state.user);
  // TODO user types

  const onClickHandler = () => {
    if (jwt) {
      logout({ jwt }).then(() => {
        CookieHelper.del('appSessionJwt');
        navigate('/login');
      });
    }
  };

  return (
    <header className="header">
      <div className="header__info">
        <img className="header__photo" src={user.profilePic} alt="profilePic" />
        <h1 className="header__name">{user.nickName}</h1>
      </div>
      <Button style={{ fontFamily: 'inherit' }} variant="outlined" size="small" onClick={onClickHandler}>Logout</Button>
    </header>
  );
};

export default Header;
