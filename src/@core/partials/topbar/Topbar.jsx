import React from 'react';
import LogoutTopbar from '../logout-topbar/LogoutTopbar';

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
            <div className='flex flex-row items-center gap-3'>
                <LogoutTopbar/>
              
            </div>
            {/* End Actions Side */}
        </div>
        {/* End Topbar Wrapper */}
      </div>
      {/* End Topbar */}
    </>
  );
}
