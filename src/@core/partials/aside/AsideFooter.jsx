import React from 'react';

import cupImg from 'img/cup.png';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

export default function AsideFooter() {
  const { asideMinimize } = useSelector((state) => ({
    asideMinimize: state.layout.aside.asideMinimize,
  }));
  return (
    <>
      <div >
        <div className=' rounded-lg w-11/12 h-fit bg-[#F1F5F9] shadow-md p-5 bottom-4 absolute'>
          <div className='flex items-center  gap-4'>
            {/* Begin Img */}
            <img src={cupImg} />
            {/* End Img */}

            {/* Begin Texts */}
            <div className='flex flex-col gap-5 '>
              <h2 className='text-center font-bold text-sm'>آموزش جامع سامانه</h2>
              <a
                className='border border-2 border-sky-300 bg-none rounded-full flex items-center font-bold text-sm h-[45px] px-3 py-2 hover:bg-sky-50 transition-all duration-300'
                href='https://luxiloom.com'
                target='_blank'
              >
                ورود به بخش آموزش
              </a>
            </div>
            {/* End Texts */}
          </div>
        </div>
      </div>
    </>
  );
}
