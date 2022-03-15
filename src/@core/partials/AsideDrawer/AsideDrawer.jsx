import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import Drawer from '@mui/material/Drawer';

import AsideToggle from './AsideToggle';
import AsideMenu from '../aside-menu/AsideMenu';
import AsideBrand from '../aside-brand/Brand';
import useBreakpoints from '../../../utility/hooks/useBreakpoint';

const openedMixin = (theme) => ({
  width: '17.8rem',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',

  width: '4.2rem',
});

const LGDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: '17.8rem',
    flexShrink: 0,
    position: 'relative',
    zIndex: '120',
    border: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    whiteSpace: 'nowrap',
    height: '100%',
    // boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

export default function AsideDrawer() {
  const point = useBreakpoints();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { open, dir } = useSelector((state) => ({
    open: state.layout.aside.open,
    dir: state.layout.config.direction,
  }));

  const handleDrawerOpen = () => {
    dispatch({ type: 'ASIDE_OPEN' });
  };

  const handleDrawerClose = () => {
    dispatch({ type: 'ASIDE_CLOSE' });
  };

  return (
    <>
      <CssBaseline />

      <LGDrawer
        // onMouseEnter={handleDrawerOpen}
        variant='permanent'
        className='hidden md:flex transition-all duration-300'
        open={open}
        anchor={dir === 'rtl' ? 'left' : 'right'}
      >
        {/* Begin Drawer Wrapper */}
        <div className='bg-[#1e1e2d] h-full flex flex-col justify-start'>
          {/* Begin Drawer Header */}
          <div className='flex flex-row justify-between items-center px-4 my-5'>
            <AsideBrand />
            <AsideToggle />
          </div>
          {/* End Drawer Header */}

          {/* Begin Aside Menu */}
          <AsideMenu />
          {/* End Aside Menu */}
        </div>
        {/* End Drawer Wrapper */}
      </LGDrawer>

      {/* Begin Mobile Drawer */}
      <Drawer
        onClose={handleDrawerClose}
        className='sm:flex md:hidden'
        open={open}
        anchor={dir === 'rtl' ? 'left' : 'right'}
      >
        {/* Begin Drawer Wrapper */}
        <div className='bg-[#1e1e2d] h-full flex flex-col justify-start'>
          {/* Begin Drawer Header */}
          <div className='flex flex-row justify-between items-center px-4 my-5'>
            <AsideBrand />
            {/* <AsideToggle /> */}
          </div>
          {/* End Drawer Header */}

          {/* Begin Aside Menu */}
          <AsideMenu />
          {/* End Aside Menu */}
        </div>
        {/* End Drawer Wrapper */}
      </Drawer>
      {/* End Mobile Drawer */}
    </>
  );
}
