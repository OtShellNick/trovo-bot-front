import React, { useEffect, useState } from 'react';
import { getUsersCount } from '@actions/userActions';
import { Button } from '@mui/material';
import CountUp from 'react-countup';

import './Login.scss';

const Login = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    getUsersCount().then(({ count: c }: {count: number}) => setCount(c));
  }, [count]);

  const loginHandler = () => {
    // eslint-disable-next-line no-undef
    window.location.replace(`https://open.trovo.live/page/login.html?client_id=${CLIENT_ID}
&response_type=code
&scope=channel_details_self+channel_update_self+user_details_self
+channel_subscriptions+chat_send_self
+chat_connect+send_to_my_channel+manage_messages
&redirect_uri=http://192.168.31.37:8088/
&state=rbtrEGERHwfebhtrEFEVEfcreg655y4r33feGREef`);
  };

  return (
    <div>
      <header className="header">
        <div className="header__info">
          {/* <img className="header__photo" src={user.profilePic} alt="profilePic" /> */}
          <h1 className="header__name">Chat Bot For Trovo</h1>
        </div>
        <Button
          style={{ fontFamily: 'inherit' }}
          variant="outlined"
          size="small"
          onClick={loginHandler}
        >
          Login
        </Button>
      </header>
      <CountUp start={0} end={count} delay={500} duration={1}>
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
            <span>Streamers Using Bot</span>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Login;
