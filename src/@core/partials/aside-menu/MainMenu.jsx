import React from 'react';
import TreeView from '@mui/lab/TreeView';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuItems from './MenuItems';

export default function MainMenu() {
  return (
    <>
      <TreeView
        aria-label='main-menu'
        // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        // defaultExpanded={['3']}
        // defaultEndIcon={<ArrowDropDownIcon />}
        // defaultCollapseIcon={<ArrowDropDownIcon />}
        // defaultExpandIcon={<ArrowRightIcon />}
        // defaultEndIcon={<div className='text-white' style={{ width: 24 }} />}
        className='h-full w-full flex items-start flex-col'
      >
        {/* Begin Menu Items */}
        <MenuItems />
        {/* End Menu Items */}
        {/* <Menu nodeId='2' labelText='Trash' labelIcon={DeleteIcon} />
        <Menu nodeId='3' labelText='Categories' labelIcon={Label}>
          <Menu
            nodeId='5'
            labelText='Social'
            labelIcon={SupervisorAccountIcon}
            labelInfo='90'
            color='#1a73e8'
            bgColor='#e8f0fe'
          />
          <Menu
            nodeId='6'
            labelText='Updates'
            labelIcon={InfoIcon}
            labelInfo='2,294'
            color='#e3742f'
            bgColor='#fcefe3'
          />
          <Menu
            nodeId='7'
            labelText='Forums'
            labelIcon={ForumIcon}
            labelInfo='3,566'
            color='#a250f5'
            bgColor='#f3e8fd'
          />
          <Menu
            nodeId='8'
            labelText='Promotions'
            labelIcon={LocalOfferIcon}
            labelInfo='733'
            color='#3c8039'
            bgColor='#e6f4ea'
          />
        </Menu>
        <Menu nodeId='4' labelText='History' labelIcon={Label} /> */}
      </TreeView>
    </>
  );
}
