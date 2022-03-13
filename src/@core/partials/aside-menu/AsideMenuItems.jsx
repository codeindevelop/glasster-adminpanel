import React from 'react';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import { Link, useLocation } from 'react-router-dom';
import { checkIsActive } from '../../helper/RouterHelpers';
import { pubFolder } from '../../helper/AssetsHelper';
import { useSelector } from 'react-redux';

export default function AsideMenuItem({ children, to, title, icon, fontIcon, hasBullet = false }) {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);

  console.log(isActive);
  const { asideOpen } = useSelector((state) => ({
    asideOpen: state.layout.aside.open,
  }));

  return (
    <div className={clsx(`${isActive === true ? 'bg-[#1b1b28]' : ' hover:bg-[#1b1b28] '} group hover:cursor-pointer  flex items-center px-4  py-3 transition-all duration-300 `)}>
      <Link className='flex items-center gap-4 menulink' to={to}>
        {hasBullet && <span className='w-1 h-1 rounded-full bg-slate-400 flex'></span>}
        {icon && (
          <span className='svg-icon svg-icon-2 svg-menu-icon transition-all duration-300'>
            <SVG  src={pubFolder(`/icons${icon}`)} />
          </span>
        )}
        {asideOpen === true && (
          <span className='text-[#9899ac]  text-sm font-pelak group-hover:mx-1 transition-all duration-300 group-hover:text-white'>
            {title}
          </span>
        )}
      </Link>
      {children}
    </div>
  );
}
