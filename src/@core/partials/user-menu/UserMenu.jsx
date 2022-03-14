import React from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import blankAvatarPic from 'img/avatar/blank.png';
import userIcon from 'img/icons/communication/com006.svg';
import settingsIcon from 'img/icons/coding/cod001.svg';
import usersIcon from 'img/icons/communication/com014.svg';
import roleIcon from 'img/icons/general/gen019.svg';
import permissionIcon from 'img/icons/general/gen049.svg';
import logoutIcon from 'img/icons/technology/teh004.svg';
import { logoutAction } from 'actions/auth/loginActions';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { asideOpen, dir, first_name, last_name, email } = useSelector((state) => ({
    asideOpen: state.layout.aside.open,
    dir: state.layout.config.direction,
    first_name: state.auth.user.user.first_name,
    last_name: state.auth.user.user.last_name,
    email: state.auth.user.user.email,
  }));
  return (
    <>
      {/* begin User Menu Wrapper */}
      <div className='relative'>
        <div className='flex cursor-pointer w-[40px] h-[40px] justify-center items-center rounded-[.475rem]  shadow-md  animation-all duration-300'>
          <img className='w-full h-full rounded-[.475rem]' src={blankAvatarPic} alt='avatar' />
        </div>
        {/* Begin DropDown Menu */}
        <div className='absolute top-14 left-0 rounded-md shadow-lg border border-1 w-[270px]'>
          {/* Begin Dropdown Wrapper */}
          <div className='flex flex-col gap-3 divide-y divide-slate-200'>
            {/* Begin Avatar and info */}
            <div className='flex gap-5 items-center   px-4 pt-4'>
              <img
                className='rounded-[.475rem] w-[50px] h-[50px]'
                src={blankAvatarPic}
                alt='avatar'
              />
              <div className='flex flex-col items-center gap-1'>
                <h2 className='text-slate-700 text-center font-bold text-md'>
                  {first_name} {last_name}
                </h2>
                <h6 className='text-slate-500 text-center font-pop text-xs'>{email}</h6>
              </div>
            </div>
            {/* End Avatar and info */}

            {/* Begin links */}
            <div className=''>
              <ul className='flex flex-col   py-2'>
                {/* Begin Profile */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={userIcon} />
                    </span>
                    <span className='text-slate-700 w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      پروفایل کاربری
                    </span>
                  </li>
                </Link>
                {/* End Profile */}
                {/* Begin System Setting */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={settingsIcon} />
                    </span>
                    <span className='text-slate-700 w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      پیکربندی سامانه
                    </span>
                  </li>
                </Link>
                {/* End System Setting */}
                {/* Begin Users List */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={usersIcon} />
                    </span>
                    <span className='text-slate-700 w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      کاربران سامانه
                    </span>
                  </li>
                </Link>
                {/* End Users List */}
                {/* Begin Roles Settings */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={roleIcon} />
                    </span>
                    <span className='text-slate-700 w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      مدیریت نقش ها
                    </span>
                  </li>
                </Link>
                {/* End Roles Settings */}
                {/* Begin Roles Settings */}
                <Link className='group' to='/'>
                  <li className='group-hover:bg-slate-100 menu-icon gap-5 py-2 group px-3 mx-3 rounded-lg cursor-pointer flex items-center  '>
                    <span className='svg-icon svg-icon-2 '>
                      <SVG src={permissionIcon} />
                    </span>
                    <span className='text-slate-700 w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                      مدیریت سطوح دسترسی
                    </span>
                  </li>
                </Link>
                {/* End Roles Settings */}
              </ul>
            </div>
            {/* End links */}

            {/* Begin Signout */}
            <ul onClick={(e) => dispatch(logoutAction())} className='  py-2 group'>
              <li className='group-hover:bg-slate-100 flex flex-row items-center gap-4 py-2 group px-3 mx-3 rounded-lg cursor-pointer '>
                <span className='svg-icon svg-icon-2 '>
                  <SVG src={logoutIcon} />
                </span>
                <span className='text-slate-700 w-full h-full text-sm font-light group-hover:text-primary 	 group-hover:mx-1 transition-all duration-300'>
                  خروج از سامانه
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
