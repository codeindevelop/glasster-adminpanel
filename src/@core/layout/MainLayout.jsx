import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config/mainConfig';

export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  const { dir, darkMode } = useSelector((state) => ({
    dir: state.layout.config.direction,
    darkMode: state.layout.config.darkMode,
  }));

  useEffect(() => {
    // Check Direction
    if (localStorage.getItem('direction') === 'ltr') {
      dispatch({ type: 'DIR_LTR' });
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      dispatch({ type: 'DIR_RTL' });
    }

    // Check and Enable Dark Mode
    if (darkMode === true || localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dir, darkMode, localStorage]);

  return (
    <>
      <div className={`dark:bg-[${config.darkModeBgColor}] h-screen w-full transition-all duration-300`}>{children}</div>
    </>
  );
}
