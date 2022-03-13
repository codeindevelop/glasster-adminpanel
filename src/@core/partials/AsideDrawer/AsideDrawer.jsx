import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import AsideToggle from './AsideToggle';
import AsideMenu from '../aside-menu/AsideMenu';
import AsideBrand from '../aside-brand/Brand';
import config from '../../../config/mainConfig';
import { CssBaseline } from '@mui/material';

const openedMixin = (theme) => ({
  width: config.asideDrawerWidth,
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

  width: config.asideMinimizedWidth,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: config.asideDrawerWidth,
    flexShrink: 0,
    zIndex: '-1',
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
  const dispatch = useDispatch();
  const { open } = useSelector((state) => ({
    open: state.layout.aside.open,
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

      <Drawer onMouseEnter={handleDrawerOpen} variant='permanent' open={open} anchor='left'>
        {/* Begin Drawer Wrapper */}
        <div className={`bg-[${config.asideDrawerColor}] h-full flex flex-col justify-start `}>
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
      </Drawer>
    </>
  );
}
