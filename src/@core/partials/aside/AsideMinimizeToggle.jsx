import React from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch, useSelector } from 'react-redux';
import ArrowIcon from 'img/icons/arrows/arr080.svg';
import clsx from 'clsx';

export default function AsideMinimizeToggle() {
  const dispatch = useDispatch();
  const { asideMinimize } = useSelector((state) => ({
    asideMinimize: state.layout.aside.asideMinimize,
  }));
  return (
    <>
      <div
        className={clsx(
          `${
            asideMinimize === true ? 'right-[6.9rem]' : ' right-[20.8rem]'
          } absolute z-50 mt-7 hidden md:flex `
        )}
      >
        <div
          onClick={(e) => dispatch({ type: 'ASIDE_MINIMIZE' })}
          className={clsx(
            `${
              asideMinimize === true && 'hidden'
            } bg-white absolute left-0 z-20 shadow-lg rounded-full w-10 h-10 cursor-pointer flex justify-center items-center transition-all duration-300 cursor-pointer`
          )}
        >
          <span className='svg-icon svg-icon-primary '>
            <SVG src={ArrowIcon} />
          </span>
        </div>

        {/* If Aside Has Minimized */}
        {asideMinimize && (
          <>
            <div
              onClick={(e) => dispatch({ type: 'ASIDE_MAXIMIZE' })}
              className={clsx(
                `${
                  asideMinimize === false && 'hidden'
                } bg-white rotate-180 absolute left-0 z-20 shadow-lg rounded-full w-10 h-10 cursor-pointer flex justify-center items-center transition-all duration-300 cursor-pointer`
              )}
            >
              <span className='svg-icon svg-icon-primary '>
                <SVG src={ArrowIcon} />
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
