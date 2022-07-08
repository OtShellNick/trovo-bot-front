import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Layout/Header/Header';
import Footer from '@components/Layout/Footer/Footer';
import Aside from '@components/Layout/Aside/Aside';
import Page from '@containers/Page/Page';

import './Layout.scss';

const Layout = () => (
  <div className="container">
    <Header />
    <main className="main">
      <Aside />
      <Page>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </Page>
    </main>
    <Footer />
  </div>
);

export default Layout;
