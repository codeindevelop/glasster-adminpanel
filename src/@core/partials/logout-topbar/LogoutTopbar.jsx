import React from 'react';
import SVG from 'react-inlinesvg';
import ArrowIcon from 'img/icons/arrows/arr077.svg';

export default function LogoutTopbar() {
  return (
    <>
      <div className='flex cursor-pointer w-10 h-10 justify-center items-center p-3 rounded-md shadow-md bg-rose-500 hover:bg-rose-600 animation-all duration-300'>
        <span className='svg-icon svg-icon-4 svg-icon-light'>
          <SVG src={ArrowIcon} />
        </span>
      </div>
    </>
  );
}
