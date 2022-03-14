import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import mainConfig from '../../config/mainConfig';

export default function LayoutWidthCalc({ children }) {
  const [xPadding, setXPadding] = useState('');

  const { dir, darkMode, asideOpen } = useSelector((state) => ({
    dir: state.layout.config.direction,
    asideOpen: state.layout.aside.open,
    darkMode: state.layout.config.darkMode,
  }));

  useEffect(() => {
    if (asideOpen === true) {
      setXPadding(mainConfig.asideDrawerWidth);
    } else {
      setXPadding('4.2rem');
    }
  }, [asideOpen]);
  return (
    <>
      <div
        className={clsx(
          `flex flex-col transition-all duration-300 relative px-2 mx-4 ${
            dir === 'ltr' ? `pl-[${xPadding}]` : `pr-[${xPadding}]`
          } `
        )}
      >
        {children}
      </div>
    </>
  );
}
