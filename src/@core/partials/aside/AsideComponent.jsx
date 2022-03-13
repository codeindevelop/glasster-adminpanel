import React from 'react';
import clsx from 'clsx';
import AsideBrand from './Brand';
import AsideMenuWrapper from '../aside-menu/AsideMenuWrapper';
import { useSelector } from 'react-redux';
import AsideMinimizeToggle from './AsideMinimizeToggle';

export default function AsideComponent() {
  const { asideMinimize } = useSelector((state) => ({
    asideMinimize: state.layout.aside.asideMinimize,
  }));
  return (
    <>
      {/* Begin Aside */}
      <aside className='z-1'>
        {/* Aside Minimize Toggle */}
        <AsideMinimizeToggle />

        {/* Begin Aside Wrapper */}
        <div
          className={clsx(
            `hidden z-1 bg-aside-light-bg transition-all duration-300 px-5 pb-10 lg:block fixed z-20 inset-0  left-auto  overflow-y-auto shadow-md border border-1
            ${
              asideMinimize === true
                ? 'w-[5.1rem]  right-[max(0px,calc(50%-45rem))]'
                : 'w-[19.5rem]  right-[max(0px,calc(50%-45rem))]'
            }
            `
          )}
        >
          <div className='flex items-center'>
            {/* Begin Brand Wrapper */}
            <AsideBrand />
            {/* End Brand Wrapper */}
          </div>

          {/* Begin Aside Menu Wrapper */}
          <AsideMenuWrapper></AsideMenuWrapper>
          {/* End Aside Menu Wrapper */}
        </div>
        {/* End Aside Wrapper */}
      </aside>
      {/* End Aside */}
    </>
  );
}
