import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../../../config/metadata';
import favicon from '../../assets/icon.png';

import Header from '../Header';
import Footer from '../Footer';
import GlobalStyle from '../../styles/global';

function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header title={title} />
      <main role="main">
        {children}
      </main>
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default Layout;
