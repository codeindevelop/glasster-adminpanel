import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import AsideToggle from './AsideToggle';
import AsideMenu from '../aside-menu/AsideMenu';
import AsideBrand from '../aside-brand/Brand';

const drawerWidth = '17.8rem';

const openedMixin = (theme) => ({
  width: drawerWidth,
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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
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
      {/* <CssBaseline /> */}

      <Drawer
        onMouseEnter={handleDrawerOpen}
        style={{ zIndex: '-1 !important' }}
        className='hidden md:flex z-1'
        variant='permanent'
        open={open}
      >
        {/* Begin Drawer Wrapper */}
        <div className='bg-[#1e1e2d] h-full flex flex-col justify-start '>
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
