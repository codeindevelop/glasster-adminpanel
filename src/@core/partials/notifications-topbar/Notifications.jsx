import React from 'react';
import SVG from 'react-inlinesvg';
import bellIcon from 'img/icons/general/gen007.svg';

export default function Notifications() {
  return (
    <>
      <div className='flex cursor-pointer relative justify-center items-center w-10 h-10 rounded-md p-3 hover:bg-slate-100 transtition-all duration-300'>
        <span className='svg-icon svg-icon-4'>
          <SVG src={bellIcon} />
        </span>
      </div>
    </>
  );
}
