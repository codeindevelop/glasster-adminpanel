import React from 'react';
import AsideComponent from '../partials/aside/AsideComponent';

export default function MasterLayout({ children }) {
  return (
    <>
      {/* Load Aside Menu */}
      <AsideComponent />
      {children}
    </>
  );
}
