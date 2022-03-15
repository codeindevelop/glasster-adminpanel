import React from 'react';
import SVG from 'react-inlinesvg';
import plusIcon from 'img/icons/general/gen035.svg';
import editIcon from 'img/icons/general/gen055.svg';

export default function ShortcutsWidget() {
  return (
    <>
      <div className='relative w-full h-[30rem] shadow-lg rounded-lg'>
        {/* Begin Inner Wrapper */}
        <div className='flex flex-col items-center justify-center'>
          {/* Begin Top Section */}
          <div className='bg-danger w-full h-[13rem] rounded-lg p-5 flex items-center'>
            <div className='flex flex-col'>
              <h2 className='text-white font-light '>سلام هادی</h2>
              <h6 className='text-slate-500 '>دسترسی سریع به بخش ها</h6>
            </div>
          </div>
          {/* End Top Section */}

          {/* Begin Footer Section */}
          <div className='w-full absolute top-[35%]'>
            {/* Begin Boxes Wrapper */}
            <div className='flex flex-col gap-2  '>
                
              {/* Begin Top Shortcuts */}
              <div className='flex items-center gap-2 px-2'>
                {/* Begin Create Post */}
                <div className='group  group-hover:scale-110 flex flex-col gap-2 w-full hover:shadow-lg bg-light-primary ease-in-out delay-150  shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  <div className='flex   flex-col gap-8 mt-2 w-full group-hover:brightness-50  transition-all duration-300'>
                    {/* Begin Post  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary'>
                      <SVG src={editIcon} />
                    </span>
                    {/* End Post Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold text-slate-500 group-hover:text-primary transition-all duration-300 group-hover:mx-1 '>مقالات</span>
                      <span className='font-bold text-slate-600 group-hover:text-primary transition-all duration-500 group-hover:mx-1'>20</span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 font-light text-sm group-hover:text-primary transition-all duration-300 group-hover:mx-2'>افزودن مقاله جدید</h2>
                </div>
                {/* End Create Post */}

                {/* Begin Create Post */}
                <div className='flex flex-col gap-2 w-full  bg-light-success   p-3 rounded-lg'>
                  <div className='flex  flex-col gap-8 mt-2 w-full'>
                    {/* Begin Post  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary'>
                      <SVG src={editIcon} />
                    </span>
                    {/* End Post Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold text-slate-500'>مقالات</span>
                      <span className='font-bold text-slate-600'>20</span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 font-light text-sm'>افزودن مقاله جدید</h2>
                </div>
                {/* End Create Post */}
              </div>
              {/* End Top Shortcuts */}

              {/* Begin Bottom Shortcuts */}
              <div className='flex items-center gap-2 px-2'>
                {/* Begin Create Post */}
                <div className='flex flex-col gap-2 w-full  bg-light-info   p-3 rounded-lg'>
                  <div className='flex  flex-col gap-8 mt-2 w-full'>
                    {/* Begin Post  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary'>
                      <SVG src={editIcon} />
                    </span>
                    {/* End Post Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold text-slate-500'>مقالات</span>
                      <span className='font-bold text-slate-600'>20</span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 font-light text-sm'>افزودن مقاله جدید</h2>
                </div>
                {/* End Create Post */}

                {/* Begin Create Post */}
                <div className='flex flex-col gap-2 w-full  bg-light-danger   p-3 rounded-lg'>
                  <div className='flex  flex-col gap-8 mt-2 w-full'>
                    {/* Begin Post  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary'>
                      <SVG src={editIcon} />
                    </span>
                    {/* End Post Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold text-slate-500'>مقالات</span>
                      <span className='font-bold text-slate-600'>20</span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 font-light text-sm'>افزودن مقاله جدید</h2>
                </div>
                {/* End Create Post */}
              </div>
              {/* End Bottom Shortcuts */}

            </div>
            {/* End Boxes Wrapper */}
          </div>
          {/* End Footer Section */}
        </div>
        {/* Begin Inner Wrapper */}
      </div>
    </>
  );
}
