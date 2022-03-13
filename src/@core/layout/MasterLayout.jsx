import React from 'react';
import AsideDrawer from '../partials/AsideDrawer/AsideDrawer';
// import AsideComponent from '../partials/aside/AsideComponent';

export default function MasterLayout({ children }) {
  return (
    <>
      {/* Load Aside Menu */}
      {/* <AsideComponent /> */}
      <AsideDrawer/>
      {children}
    </>
  );
}
