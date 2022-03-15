import React from 'react';
import SVG from 'react-inlinesvg';
import menuIcon from 'img/icons/abstract/abs015.svg';
import { useDispatch } from 'react-redux';

export default function AssideMobileToggle() {
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    dispatch({ type: 'ASIDE_OPEN' });
  };
  return (
    <>
      <div onClick={(e) => handleDrawerOpen()} className='flex items-center justify-center cursor-pointer'>
        <span className='svg-icon svg-icon-3 svg-icon-primary'>
          <SVG src={menuIcon} />
        </span>
      </div>
    </>
  );
}
