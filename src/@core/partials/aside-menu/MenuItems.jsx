import React from 'react';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { FormattedMessage } from 'react-intl';
import { pubFolder } from '../../helper/AssetsHelper';
import { checkIsActive } from '../../helper/RouterHelpers';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: '#f1f1f1',
  marginLeft: 0,
  marginRight: 0,

  [`& .${treeItemClasses.iconContainer}`]: {
    display: 'none !important',
    paddingRight: 0,
    paddingLeft: 0,
    // borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  [`& .${treeItemClasses.content}`]: {
    marginRight: 0,
    marginLeft: 0,
    color: '#f1f1f1',

    paddingRight: 0,
    paddingLeft: 0,

    backgroundColor: '#1e1e2d',
    '&.Mui-expanded': {
      backgroundColor: '#1e1e2d',
    },
    '&:hover': {
      backgroundColor: '#1b1b28',
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: '#1e1e2d',
      color: 'var(--tree-view-color)',
    },
    // Main Menu Texts Style
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    marginRight: 10,
    // Dropdown Content Style
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: '2rem',

      //   paddingRight: '2rem',
    },
  },
}));

export const Menu = (props) => {
  const { bgColor, color, icon, labelInfo, to, title, ...other } = props;
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { asideOpen } = useSelector((state) => ({
    asideOpen: state.layout.aside.open,
  }));

  return (
    <StyledTreeItemRoot
      className='w-full'
      label={
        <div
          className={clsx(
            ` 
            ${asideOpen === true ? 'px-3' : 'px-3'}

            ${
              isActive === true ? 'bg-[#1b1b28]' : ' hover:bg-[#1b1b28] '
            } group hover:cursor-pointer  flex items-center   py-3 transition-all duration-300 `
          )}
        >
          <Link className='flex items-center    ' to={to}>
            <div className='flex items-center gap-3'>
              {/* Begin Menu Icon */}
              <span className='svg-icon svg-icon-2 svg-menu-icon transition-all duration-300'>
                <SVG src={pubFolder(`/icons${icon}`)} />
              </span>
              {/* End Menu Icon */}

              {asideOpen === true && (
                <span
                  className={clsx(
                    `${
                      isActive === true && 'text-white'
                    } text-[#9899ac]  text-sm font-pelak group-hover:mx-1 transition-all duration-300 group-hover:text-white`
                  )}
                >
                  {title}
                </span>
              )}
              <h2 className='text-white'>{labelInfo}</h2>
            </div>
          </Link>
        </div>
      }
      //   style={{
      //     '--tree-view-color': color,
      //     '--tree-view-bg-color': bgColor,
      //   }}
      {...other}
    />
  );
};

export default function MenuItems() {
  return (
    <>
      <Menu
        nodeId='1'
        title={<FormattedMessage id='MENU.DASHBOARD' />}
        icon='/general/gen014.svg'
        to='/dashboard'
      />

      <Menu nodeId='2' title='دسته بندی' icon='/general/gen022.svg'>
        <Menu nodeId='3' title='Social' labelInfo='' to='/ffff' color='#1a73e8' bgColor='#e8f0fe' />
        <Menu nodeId='4' title='Social' labelInfo='' to='/asd' color='#1a73e8' bgColor='#e8f0fe' />
      </Menu>

      {/* End Menu Links */}
    </>
  );
}
