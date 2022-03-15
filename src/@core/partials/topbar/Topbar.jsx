import React from 'react';
import DarkSwith from '../dark-toggle-topbar/DarkSwith';
import LanguagesSwitch from '../languages-switch-topbar/LanguagesSwitch';
import UserMenu from '../user-menu/UserMenu';
import Notifications from '../notifications-topbar/Notifications';
import Search from '../search-topbar/Search';
import TodoBtnTopbar from '../todo-topbar/TodoBtnTopbar';
import CalendarBtnTopbar from '../calendar-topbar/CalendarBtnTopbar';
import EmailBtnTopbar from '../email-topbar/EmailBtnTopbar';
import AssideMobileToggle from '../AsideDrawer/MobileToggle';

export default function Topbar() {
  return (
    <>
      {/* Begin Topbar */}
      <div className='w-full my-5 h-16 dark:bg-[#1e1e2d] rounded-lg p-3 shadow-xl dark:border-none '>
        {/* Begin Topbar Wrapper */}
        <div className='flex flex-row justify-between items-center w-full h-full'>
          {/* Begin side one */}
          <div className='hidden md:flex items-center  lg:flex '>
            {/* Begin Todo Btn */}
            <TodoBtnTopbar />
            {/* End Todo Btn */}

            {/* Begin Calendar Btn */}
            <CalendarBtnTopbar />
            {/* End Calendar Btn */}

            {/* Begin Email Btn */}
            <EmailBtnTopbar />
            {/* End Email Btn */}
          </div>
          {/* End side one */}

          {/* Begin Mobile Menu Toggle */}
          <div className='sm:flex md:hidden items-center  lg:hidden '>
            <AssideMobileToggle />
          </div>
          {/* End Mobile Menu Toggle */}

          {/* Begin Actions Side */}
          <div className='flex flex-row items-center gap-2'>
            {/* Begin Select Language Component */}
            <LanguagesSwitch />
            {/* End Select Language Component */}

            {/* Begin Dark Light Switch Component */}
            <DarkSwith />
            {/* End Dark Light Switch Component */}
            {/* Begin Search Component */}
            <Search />
            {/* End Search Component */}

            {/* Begin Notifications Component */}
            <Notifications />
            {/* End Notifications Component */}

            {/* Begin User Dropdown Menu */}
            <UserMenu />
            {/* End User Dropdown Menu */}
          </div>
          {/* End Actions Side */}
        </div>
        {/* End Topbar Wrapper */}
      </div>
      {/* End Topbar */}
    </>
  );
}
