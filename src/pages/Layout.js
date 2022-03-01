import React from 'react';
import Header from '../components/header/Header';
import Notification from '../components/notification/Notification';

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
        <Notification />
      </main>
    </>
  );
}

export default Layout;
