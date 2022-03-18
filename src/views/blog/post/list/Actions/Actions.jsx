/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import SVG from 'react-inlinesvg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import viewIcon from 'img/icons/general/gen019.svg';
import editIcon from 'img/icons/general/gen055.svg';
import deleteIcon from 'img/icons/general/gen027.svg';
import { FormattedMessage } from 'react-intl';

export default function Actions(cellContent, row, rowIndex) {
  const dispatch = useDispatch();
  const route = useHistory();

  return (
    <>
      <div className='flex items-center gap-3'>
        <Tooltip
          title={
            <>
              <div className='flex flex-col items-center'>
                <h2>
                  <FormattedMessage id='ACTIONS_VIEW_POST_HEAD' />
                </h2>
                <p>
                  <FormattedMessage id='ACTIONS_VIEW_POST_DESC' />
                </p>
              </div>
            </>
          }
          arrow
        >
          <div className='p-3 transtion-all duration-300 bg-slate-100 dark:bg-[#323248] cursor-pointer rounded-[0.33rem] hover:bg-[#f1f1f1] hover:shadow-md flex items-center justify-center'>
            <span className='svg-icon svg-icon-md svg-icon-primary'>
              <SVG src={viewIcon} />
            </span>
          </div>
        </Tooltip>
        <Tooltip
          title={
            <>
              <div className='flex flex-col items-center'>
                <h2>
                  <FormattedMessage id='ACTIONS_EDIT_POST_HEAD' />
                </h2>
                <p>
                  <FormattedMessage id='ACTIONS_EDIT_POST_DESC' />
                </p>
              </div>
            </>
          }
          arrow
        >
          <div
            className='p-3 transtion-all duration-300 bg-slate-100 dark:bg-[#323248] cursor-pointer rounded-[0.33rem] hover:bg-[#f1f1f1] hover:shadow-md flex items-center justify-center'
            onClick={(e) => {
              dispatch({ type: 'POST_ROW_ID', payload: row.id });
              route.push('/post/edit');
            }}
          >
            <span className='svg-icon svg-icon-md svg-icon-primary'>
              <SVG src={editIcon} />
            </span>
          </div>
        </Tooltip>
        <Tooltip
          title={
            <>
              <div className='flex flex-col items-center'>
                <h2>
                  <FormattedMessage id='ACTIONS_DELETE_POST_HEAD' />
                </h2>
                <p>
                  <FormattedMessage id='ACTIONS_DELETE_POST_DESC' />
                </p>
              </div>
            </>
          }
          arrow
        >
          <div
            className='p-3 transtion-all duration-300 bg-slate-100 dark:bg-[#323248] cursor-pointer rounded-[0.33rem] hover:bg-[#f1f1f1] hover:shadow-md flex items-center justify-center'
            onClick={(e) =>
              dispatch({
                type: 'DELETE_DIALOG_SHOW',
              })
            }
          >
            <span className='svg-icon svg-icon-md svg-icon-primary'>
              <SVG src={deleteIcon} />
            </span>
          </div>
        </Tooltip>
      </div>
    </>
  );
}
