import React, { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

import blankAvatarPic from 'img/avatar/blank.png';
import userIcon from 'img/icons/communication/com006.svg';
import settingsIcon from 'img/icons/coding/cod001.svg';
import usersIcon from 'img/icons/communication/com014.svg';
import roleIcon from 'img/icons/general/gen019.svg';
import permissionIcon from 'img/icons/general/gen049.svg';
import logoutIcon from 'img/icons/technology/teh004.svg';
import { logoutAction } from 'actions/auth/loginActions';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';

export default function UserMenu() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState('translate-y-6 opacity-0 invisible');
  const { asideOpen, dir, first_name, last_name, email, profile_pic } = useSelector((state) => ({
    asideOpen: state.layout.aside.open,
    dir: state.layout.config.direction,
    first_name: state.auth.user.user.first_name,
    last_name: state.auth.user.user.last_name,
    email: state.auth.user.user.email,
    profile_pic: state.auth.user.user.profile_pic,
  }));

  useEffect(() => {
    document.addEventListener('click', handleClose);
  }, [document]);

  const handleClose = () => {
    setShowMenu('translate-y-6 opacity-0 invisible');
  };

  const handleOpen = () => {
    setShowMenu('translate-y-0 transform ease-in opacity-100 visible');
  };
  return (
    <>
      {/* begin User Menu Wrapper */}
      <div className='relative'>
        <div
          onMouseEnter={(e) => handleOpen()}
          className='flex cursor-pointer w-[40px] h-[40px] justify-center items-center rounded-[.475rem]  shadow-md  animation-all duration-300'
        >
          <img className='w-full h-full rounded-[.475rem]' src={blankAvatarPic} alt='avatar' />
        </div>
        {/* Begin DropDown Menu */}
        <div
          className={clsx(
            `${showMenu} absolute ${
              dir === 'rtl' ? 'left-0' : 'right-0'
            }   transition-all duration-200 top-14  rounded-lg shadow-lg border border-1 dark:border-none dark:bg-[#1e1e2d] w-[270px]`
          )}
        >
          {/* Begin Dropdown Wrapper */}
          <div
            onMouseLeave={(e) => handleClose()}
            className='flex flex-col gap-3 divide-y divide-gray-200 dark:divide-[#2b2b40] w-full'
          >
            {/* Begin Avatar and info */}
            <div className='flex gap-2 items-center   px-4 pt-4 '>
              {!first_name ? (
                <>
                  <Skeleton
                    sx={{ width: '40px', height: '40px' }}
                    animation='pulse'
                    variant='rectangular'
                    className='rounded-[.475rem]'
                  />
                </>
              ) : (
                <>
                  {profile_pic === null ? (
                    <>
                      <img
                        className='rounded-[.475rem] w-[50px] h-[50px]'
                        src={blankAvatarPic}
                        alt='avatar'
                      />
                    </>
                  ) : (
                    <>
                      <img
                        className='rounded-[.475rem] w-[50px] h-[50px]'
                        src={profile_pic}
                        alt='avatar'
                      />
                    </>
                  )}
                </>
              )}

              <div className='flex flex-col items-center gap-1  w-full'>
                <div className='w-full'>
                  {/* Check if redux store not loaded , try to display loading */}
                  {!first_name ? (
                    <>
                      <Skeleton
                        sx={{ width: '75%', height: '0.6rem' }}
                        animation='wave'
                        variant='rectangular'
                      />
                      <Skeleton width='100%' />
                    </>
                  ) : (
                    <>
                      <Link className='group' to='/'>
                        <h2 className='text-slate-700 group-hover:text-primary dark:text-white  text-center font-bold text-md'>
                          {first_name} {last_name}
                        </h2>
                        <h6 className='text-slate-500 dark:text-white text-center font-pop text-xs'>
                          {email}
                        </h6>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Avatar and info */}

            {/* Begin links */}
            <div className=''>
              <ul className='flex flex-col   py-2'>
                {/* Begin Profile */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100  dark:group-hover:bg-[#1b1b29cc] menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={userIcon} />
                    </span>
                    <span className='text-slate-700 dark:text-[#cdcdde] w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      <FormattedMessage id='USERMENU_PROFILE' />
                    </span>
                  </li>
                </Link>
                {/* End Profile */}
                {/* Begin System Setting */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 dark:group-hover:bg-[#1b1b29cc] menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={settingsIcon} />
                    </span>
                    <span className='text-slate-700 dark:text-[#cdcdde] w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      <FormattedMessage id='USERMENU_CONFIGURATION' />
                    </span>
                  </li>
                </Link>
                {/* End System Setting */}
                {/* Begin Users List */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 dark:group-hover:bg-[#1b1b29cc] menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={usersIcon} />
                    </span>
                    <span className='text-slate-700 dark:text-[#cdcdde] w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      <FormattedMessage id='USERMENU_USERS_LIST' />
                    </span>
                  </li>
                </Link>
                {/* End Users List */}
                {/* Begin Roles Settings */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 dark:group-hover:bg-[#1b1b29cc] menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={roleIcon} />
                    </span>
                    <span className='text-slate-700 dark:text-[#cdcdde] w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      <FormattedMessage id='USERMENU_ROLES' />
                    </span>
                  </li>
                </Link>
                {/* End Roles Settings */}
                {/* Begin Roles Settings */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 dark:group-hover:bg-[#1b1b29cc] menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={permissionIcon} />
                    </span>
                    <span className='text-slate-700 dark:text-[#cdcdde] w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      <FormattedMessage id='USERMENU_PERMISSIONS' />
                    </span>
                  </li>
                </Link>
                {/* End Roles Settings */}
              </ul>
            </div>
            {/* End links */}

            {/* Begin Signout */}
            <ul onClick={(e) => dispatch(logoutAction())} className='  py-2 group'>
              <li className='group-hover:bg-slate-100 dark:group-hover:bg-[#1b1b29cc] flex flex-row items-center gap-4 py-2 group px-3 mx-3 rounded-lg cursor-pointer '>
                <span className='svg-icon svg-icon-2 '>
                  <SVG src={logoutIcon} />
                </span>
                <span className='text-slate-700 dark:text-[#cdcdde] w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                  <FormattedMessage id='USERMENU_SIGNOUT' />
                </span>
              </li>
            </ul>
            {/* End Signout */}
          </div>
          {/* End Dropdown Wrapper */}
        </div>
        {/* End DropDown Menu */}
      </div>
      {/* End User Menu Wrapper */}
    </>
  );
}
