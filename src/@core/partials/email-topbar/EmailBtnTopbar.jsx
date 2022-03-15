import React from 'react';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import emailIcon from 'img/icons/communication/com010.svg';

export default function EmailBtnTopbar() {
  const router = useHistory();
  return (
    <>
      <Tooltip
        title={
          <>
            <div className='flex flex-col items-center'>
              <h2>مدیریت ایمیل</h2>
              <p>تمامی ایمیل های خود را از این بخش مدیریت نمایید</p>
            </div>
          </>
        }
        arrow
      >
        <div
          onClick={(e) => router.push('/email')}
          className='flex cursor-pointer relative justify-center items-center w-10 h-10 rounded-md p-3 dark:hover:bg-white/[.08] hover:bg-slate-100 transtition-all duration-300'
        >
          <span className='svg-icon svg-icon-2 svg-menu-icon svg-icon-gray-600'>
            <SVG src={emailIcon} />
          </span>
        </div>
      </Tooltip>
    </>
  );
}
