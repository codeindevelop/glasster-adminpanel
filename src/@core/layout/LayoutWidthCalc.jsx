import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

export default function LayoutWidthCalc({ children }) {
  const { dir, darkMode, asideOpen } = useSelector((state) => ({
    dir: state.layout.config.direction,
    asideOpen: state.layout.aside.open,
    darkMode: state.layout.config.darkMode,
  }));

  return (
    <>
      {/* Check Aside Drawer open or close for set page width padding */}
      {asideOpen === true ? (
        <>
          <div
            className={clsx(
              `flex flex-col transition-all duration-300 relative px-2 mx-4 ${
                dir === 'ltr' ? `pl-[17.8rem]` : `pr-[17.8rem]`
              } `
            )}
          >
            {children}
          </div>
        </>
      ) : (
        <>
          <div
            className={clsx(
              `flex flex-col transition-all duration-300 relative px-2 mx-4 ${
                dir === 'ltr' ? `pl-[4.2rem]` : `pr-[4.2rem]`
              } `
            )}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
}
