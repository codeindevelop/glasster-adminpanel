import React from 'react';
import { FormattedMessage } from 'react-intl';
import AsideMenuItem from './AsideMenuItems';

export default function AsideMainMenu() {
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/general/gen022.svg'
        title={<FormattedMessage id='MENU.DASHBOARD' />}
      />
    </>
  );
}
