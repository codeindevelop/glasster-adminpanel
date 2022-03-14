import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function DarkSwith() {
  const dispatch = useDispatch();
  const { dir, darkMode } = useSelector((state) => ({
    dir: state.layout.config.direction,
    darkMode: state.layout.config.darkMode,
  }));

  const handleSwitch = () => {
    if (darkMode === true) {
      dispatch({ type: 'DARKMODE_OFF' });
    } else {
      dispatch({ type: 'DARKMODE_ON' });
    }
  };
  return (
    <>
      <div
        onClick={(e) => handleSwitch()}
        className='flex cursor-pointer group  justify-center items-center w-10 h-10 rounded-md   dark:hover:bg-white/[.08] hover:bg-slate-100 transtition-all duration-300'
      >
        {darkMode === true ? (
          <i className='fonticon-sun text-lg flex justify-center group-hover:text-primary items-center text-gray-500 transtition-all duration-300'></i>
        ) : (
          <i className='fonticon-moon text-lg flex justify-center group-hover:text-primary items-center text-gray-500 transtition-all duration-300'></i>
        )}
      </div>
    </>
  );
}
