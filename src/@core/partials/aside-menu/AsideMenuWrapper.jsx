import React from 'react';

export default function AsideMenuWrapper({ children }) {
  return (
    <>
      <div className='flex flex-col'>{children}</div>
    </>
  );
}
