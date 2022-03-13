import React from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch, useSelector } from 'react-redux';
import ArrowIcon from 'img/icons/arrows/arr080.svg';
import clsx from 'clsx';

export default function AsideToggle() {
  const dispatch = useDispatch();
  const { asideOpen } = useSelector((state) => ({
    asideOpen: state.layout.aside.open,
  }));

  const handleToggle = () => {
    if (asideOpen === true) {
      dispatch({ type: 'ASIDE_CLOSE' });
    } else {
      dispatch({ type: 'ASIDE_OPEN' });
    }
  };
  return (
    <>
      <div
        onClick={handleToggle}
        className={clsx(`${asideOpen === false && 'rotate-180'}
        transition-all duration-300 cursor-pointer toggle-icon  flex items-center justify-center`)}
      >
        <span className='svg-icon svg-icon-2 '>
          <SVG src={ArrowIcon} />
        </span>
        {/* <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton> */}
      </div>
    </>
  );
}
