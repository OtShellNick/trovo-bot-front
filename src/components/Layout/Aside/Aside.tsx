import React from 'react';

import './Aside.scss';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
  const navigate = useNavigate();
  const MENU = [
    {
      name: 'Dashboard',
      path: '/',
      onClick: () => {
        navigate('/');
      },
    },
    {
      name: 'Settings',
      path: '/settings',
      onClick: () => {
        navigate('/settings');
      },
    },
  ];
  return (
    <aside className="aside">
      <ul className="aside__list">
        {MENU.map((item) => (
          <li
            key={`${item.name}`}
            className="aside__list__item"
            onClick={item.onClick}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
