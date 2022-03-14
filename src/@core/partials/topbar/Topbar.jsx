import React from 'react';
import LogoutTopbar from '../logout-topbar/LogoutTopbar';
import Notifications from '../notifications-topbar/Notifications';
import Search from '../search-topbar/Search';

export default function Topbar() {
  return (
    <>
      {/* Begin Topbar */}
      <div className='w-full my-5 h-16 rounded-lg p-3 shadow-lg border border-1'>
        {/* Begin Topbar Wrapper */}
        <div className='flex flex-row justify-between items-center w-full h-full'>
          {/* Begin side one */}
          <div>
            <h2>متن</h2>
          </div>
          {/* End side one */}
          {/* Begin Actions Side */}
          <div className='flex flex-row items-center gap-2'>
            {/* Begin Search Component */}
            <Search />
            {/* End Search Component */}

            {/* Begin Notifications Component */}
            <Notifications />
            {/* End Notifications Component */}

            {/* Begin Logout Component */}
            <LogoutTopbar />
            {/* End Logout Component */}
          </div>
          {/* End Actions Side */}
        </div>
        {/* End Topbar Wrapper */}
      </div>
      {/* End Topbar */}
    </>
  );
}
