import React from 'react';
import AsideMenuItem from './AsideMenuItems';

export default function AsideMainMenu() {
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/general/gen022.svg'
        title='پیشخوانِ مدیریت'
      />
      <AsideMenuItem
        to='/dashboard'
        icon='/general/gen011.svg'
        title='مدیریت کاربران'
      />
    </>
  );
}
