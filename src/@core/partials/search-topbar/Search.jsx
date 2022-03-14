import React from 'react';
import SVG from 'react-inlinesvg';
import searchIcon from 'img/icons/general/gen004.svg';

export default function Search() {
  return (
    <>
    <div className='flex cursor-pointer relative justify-center items-center w-10 h-10 rounded-md p-3 hover:bg-slate-100 transtition-all duration-300'>
        <span className='svg-icon svg-icon-2 svg-icon-gray-600'>
          <SVG src={searchIcon} />
        </span>
      </div>
    </>
  );
}
