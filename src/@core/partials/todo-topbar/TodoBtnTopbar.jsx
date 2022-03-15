import React from 'react';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import todoIcon from 'img/icons/general/gen037.svg';
import { FormattedMessage } from 'react-intl';

export default function TodoBtnTopbar() {
  const router = useHistory();
  return (
    <>
      <Tooltip
        title={
          <>
            <div className='flex flex-col items-center'>
              <h2>
                <FormattedMessage id='TOPBAR_TODO_HEADER' />
              </h2>
              <p>
                <FormattedMessage id='TOPBAR_TODO_DESC' />
              </p>
            </div>
          </>
        }
        arrow
      >
        <div
          onClick={(e) => router.push('/task')}
          className='flex cursor-pointer relative justify-center items-center w-10 h-10 rounded-md p-3 dark:hover:bg-white/[.08] hover:bg-slate-100 transtition-all duration-300'
        >
          <span className='svg-icon svg-icon-2 svg-menu-icon svg-icon-gray-600'>
            <SVG src={todoIcon} />
          </span>
        </div>
      </Tooltip>
    </>
  );
}
