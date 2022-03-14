import React from 'react';

import blankAvatarPic from 'img/avatar/blank.png';
import { Link } from 'react-router-dom';

export default function UserMenu() {
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
            <div className='flex gap-5 items-center   p-5'>
              <img
                className='rounded-[.475rem] w-[50px] h-[50px]'
                src={blankAvatarPic}
                alt='avatar'
              />
              <div className='flex flex-col items-center'>
                <h2 className='text-slate-700 text-center font-bold text-md'>Jhon Do</h2>
                <h6 className='text-slate-500 text-center font-pop text-xs'>email@rmail.com</h6>
              </div>
            </div>
            {/* End Avatar and info */}

            {/* Begin links */}
            <div className=''>
              <ul className='flex flex-col gap-4 px-6 py-5'>
                <li>
                  <Link to='/user/profile'>
                    <span className='text-slate-700 text-sm font-light	 hover:mx-1 transition-all duration-300'>
                      پروفایل کاربری
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/user/profile'>
                    <span className='text-slate-700 text-sm font-light	 hover:mx-1 transition-all duration-300'>
                      تنظیمات کاربری
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/user/profile'>
                    <span className='text-slate-700 text-sm font-light	 hover:mx-1 transition-all duration-300'>
                      پیکربندی سامانه
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/user/profile'>
                    <span className='text-slate-700 text-sm font-light	 hover:mx-1 transition-all duration-300'>
                      تنظیمات SEO
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* End links */}
            {/* <div className='border-b-2'></div> */}

            {/* Begin Signout */}
            <div className='p-5'>
              <span className='text-slate-500 cursor-pointer  text-sm font-normal	 hover:mx-1 transition-all duration-300'>
                خروج از سامانه
              </span>
            </div>
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
