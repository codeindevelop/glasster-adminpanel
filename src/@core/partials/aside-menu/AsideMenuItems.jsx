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
  const { asideMinimize } = useSelector((state) => ({
    asideMinimize: state.layout.aside.asideMinimize,
  }));

  return (
    <div className='flex items-center my-3 px-2 '>
      <Link className={clsx('flex items-center gap-2 group', { active: isActive })} to={to}>
        {hasBullet && <span className='w-1 h-1 rounded-full bg-slate-400 flex'></span>}
        {icon && (
          <span className='svg-icon svg-icon-2 svg-icon-gray-700  transition-all duration-300'>
            <SVG src={pubFolder(`/icons${icon}`)} />
          </span>
        )}
        {asideMinimize === false && (
          <span className='text-slate-600  text-md font-pelak group-hover:mx-1 transition-all duration-300 group-hover:text-sky-500'>
            {title}
          </span>
        )}
      </Link>
      {children}
    </div>
  );
}
