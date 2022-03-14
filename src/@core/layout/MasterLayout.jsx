import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import React from 'react';
import AsideDrawer from '../partials/AsideDrawer/AsideDrawer';
import Topbar from '../partials/topbar/Topbar';
import mainConfig from '../../config/mainConfig';
import LayoutWidthCalc from './LayoutWidthCalc';
export default function MasterLayout({ children }) {
  const { dir, darkMode } = useSelector((state) => ({
    dir: state.layout.config.direction,
    darkMode: state.layout.config.darkMode,
  }));
  return (
    <>
      <LayoutWidthCalc>
        {/* Load Aside Drawer */}
        <AsideDrawer />

        {/* Begin TopBar */}
        <Topbar />
        {/* End TopBar */}

        {/* Begin Content */}
        <div className='flex flex-col '>{children}</div>
        {/* End Content */}
      </LayoutWidthCalc>
    </>
  );
}
