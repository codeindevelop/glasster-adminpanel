import { Box } from '@mui/material';
import React from 'react';
import AsideDrawer from '../partials/AsideDrawer/AsideDrawer';
// import AsideComponent from '../partials/aside/AsideComponent';

export default function MasterLayout({ children }) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* Load Aside Menu */}
        {/* <AsideComponent /> */}
        <AsideDrawer />
        {children}
      </Box>
    </>
  );
}
