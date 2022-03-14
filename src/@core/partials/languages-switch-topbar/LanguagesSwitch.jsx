import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { languages } from '../../i18n/Languages';
import { useLang, setLanguage } from '../../i18n/SiteLangProvider';

export default function LanguagesSwitch() {
  const lang = useLang();
  const currentLanguage = languages.find((x) => x.lang === lang);

  const [showMenu, setShowMenu] = useState('translate-y-6 opacity-0 invisible');

  useEffect(() => {
    document.addEventListener('click', handleClose);
  }, [document]);

  const handleClose = () => {
    setShowMenu('translate-y-6 opacity-0 invisible');
  };

  const handleOpen = () => {
    setShowMenu('translate-y-0 transform ease-in opacity-100 visible');
  };

  return (
    <>
      <div className='w-32 h-10 relative transition-all duration-300'>
        <button
          onMouseEnter={(e) => handleOpen()}
          className='flex gap-2 h-full w-full justify-center p-3 items-center dark:hover:bg-white/[.08] hover:bg-slate-100 rounded-lg  w-full  transition-all duration-300   dark:hover:text-primary  '
        >
          <img className='rounded-full w-5 h-5' src={currentLanguage?.flag} alt='glasster-lang' />
          <span className='text-slate-600 dark:text-white hover:text-primary transition-all duration-300'>
            {currentLanguage?.name}
          </span>
        </button>
        {/* Dropdown menu */}
        <div
          className={clsx(
            `${showMenu}   absolute top-12 z-10 w-full text-base list-none bg-white rounded  transition-all duration-300  dark:bg-[#1e1e2d] `
          )}
          onMouseLeave={(e) => handleClose()}
        >
          <ul className='py-1 transition-all duration-300'>
            {languages.map((l) => (
              <li
                onClick={() => {
                  setLanguage(l.lang);
                }}
                className='w-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-[#1b1b28] transition-all duration-300 cursor-pointer '
                key={l.lang}
              >
                <div className='flex items-center justify-between'>
                  <img className='rounded-full w-5 h-5' src={l.flag} alt='glasster-lang' />
                  <span className='text-slate-700 hover:mx-1 dark:text-white mx-3 transition-all duration-300'>
                    {l.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
