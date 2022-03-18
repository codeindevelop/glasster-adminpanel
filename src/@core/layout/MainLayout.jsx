import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../../@core/i18n/Languages';
import { useLang } from '../../@core/i18n/SiteLangProvider';
export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  const lang = useLang();
  const { dir, darkMode } = useSelector((state) => ({
    dir: state.layout.config.direction,
    darkMode: state.layout.config.darkMode,
  }));
  const currentLanguage = languages.find((x) => x.lang === lang);

  useEffect(() => {
    // Check Direction
    if (localStorage.getItem('direction') === 'ltr') {
      dispatch({ type: 'DIR_LTR' });
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      dispatch({ type: 'DIR_RTL' });
    }
    // Check Direction ّFrom Language
    if (currentLanguage?.name === 'فارسی') {
      dispatch({ type: 'DIR_RTL' });
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    } else {
      dispatch({ type: 'DIR_LTR' });
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }

    // Check and Enable Dark Mode
    if (darkMode === true || localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      dispatch({ type: 'DARKMODE_ON' });
    } else {
      dispatch({ type: 'DARKMODE_OFF' });
      document.documentElement.classList.remove('dark');
    }
  }, [dir, darkMode, localStorage, currentLanguage]);

  return (
    <>
      <div className={`${dir === 'ltr' && ('font-pop')} dark:bg-[#151521] h-screen w-full transition-all duration-300 overflow-y-auto`}>
        {children}
      </div>
    </>
  );
}
