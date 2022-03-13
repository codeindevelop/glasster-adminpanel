import React from 'react';
import AsideBrand from './Brand';

export default function AsideComponent() {
  return (
    <>
      {/* Begin Aside */}
      <aside className='hidden bg-aside-light-bg lg:block fixed z-20 inset-0  right-[max(0px,calc(50%-45rem))] left-auto w-[19.5rem] pb-10 px-3 overflow-y-auto shadow-md border border-1'>
        {/* Begin Aside Wrapper */}
        <div className='p-5'>
          {/* Begin Brand Wrapper */}
          <AsideBrand />
          {/* End Brand Wrapper */}
        </div>
        {/* End Aside Wrapper */}
      </aside>
      {/* End Aside */}
    </>
  );
}
