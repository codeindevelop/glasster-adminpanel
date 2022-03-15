import React from 'react';
import SVG from 'react-inlinesvg';
import plusIcon from 'img/icons/general/gen035.svg';
import configIcon from 'img/icons/coding/cod009.svg';
import editIcon from 'img/icons/general/gen055.svg';
import addUserIcon from 'img/icons/general/gen049.svg';

export default function ShortcutsWidget() {
  return (
    <>
      <div className='relative z-1 w-full h-[32.5rem] dark:bg-[#1e1e2d] shadow-lg rounded-lg'>
        {/* Begin Inner Wrapper */}
        <div className='flex flex-col items-center justify-center'>
          {/* Begin Top Section */}
          <div className='bg-danger w-full h-[13rem] rounded-lg p-5 flex items-center'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-white font-light '>سلام هادی</h2>
              <h6 className='text-white  '>دسترسی سریع به بخش های مختلف</h6>
            </div>
          </div>
          {/* End Top Section */}

          {/* Begin Footer Section */}
          <div className='w-full absolute top-[31%] p-5 bg-light '>
            {/* Begin Boxes Wrapper */}
            <div className='flex flex-col gap-4  '>
              {/* Begin Top Shortcuts */}
              <div className='flex items-center gap-4 px-2'>
                {/* Begin Create Post */}
                <div className='group    flex flex-col gap-2 w-full hover:shadow-lg bg-light-primary   dark:bg-dark-light-primary ease-in-out delay-150  shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                    {/* Begin Post  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary'>
                      <SVG src={editIcon} />
                    </span>
                    {/* End Post Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold dark:text-primary text-slate-500 group-hover:text-primary dark:group-hover:text-white transition-all duration-300  '>
                        مقالات
                      </span>
                      <span className='font-bold dark:text-primary text-slate-600 group-hover:text-primary dark:group-hover:text-white transition-all duration-500 '>
                        20
                      </span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 dark:text-primary font-light text-sm group-hover:text-primary dark:group-hover:text-white transition-all duration-300 '>
                    افزودن مقاله جدید
                  </h2>
                </div>
                {/* End Create Post */}

                {/* Begin Create Post category */}
                <div className='group    flex flex-col gap-2 w-full hover:shadow-lg bg-light-warning   dark:bg-dark-light-warning ease-in-out delay-150  shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                    {/* Begin Post category  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary dark:svg-icon-warning'>
                      <SVG src={plusIcon} />
                    </span>
                    {/* End Post category Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold dark:text-warning text-slate-500 group-hover:text-warning dark:group-hover:text-white transition-all duration-300  '>
                        دسته ها
                      </span>
                      <span className='font-bold dark:text-warning text-slate-600 group-hover:text-warning dark:group-hover:text-white transition-all duration-500 '>
                        5
                      </span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 dark:text-warning font-light text-sm group-hover:text-warning dark:group-hover:text-white transition-all duration-300 '>
                    افزودن دسته جدید
                  </h2>
                </div>
                {/* End Create Post category */}
              </div>
              {/* End Top Shortcuts */}

              {/* Begin Bottom Shortcuts */}
              <div className='flex items-center gap-4 px-2'>
                {/* Begin Create user */}
                <div className='group    flex flex-col gap-2 w-full hover:shadow-lg bg-light-danger   dark:bg-dark-light-danger ease-in-out delay-150  shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                    {/* Begin Post category  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary dark:svg-icon-danger'>
                      <SVG src={addUserIcon} />
                    </span>
                    {/* End Post category Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold dark:text-danger text-slate-500 group-hover:text-danger dark:group-hover:text-white transition-all duration-300  '>
                        کاربران
                      </span>
                      <span className='font-bold dark:text-danger text-slate-600 group-hover:text-danger dark:group-hover:text-white transition-all duration-500 '>
                        2
                      </span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 dark:text-danger font-light text-sm group-hover:text-danger dark:group-hover:text-white transition-all duration-300 '>
                    افزودن کاربر جدید
                  </h2>
                </div>
                {/* End Create user */}

                 {/* Begin system Config */}
                 <div className='group    flex flex-col gap-2 w-full hover:shadow-lg bg-light-success   dark:bg-dark-light-success ease-in-out delay-150  shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                    {/* Begin Config  Icon */}
                    <span className='svg-icon svg-icon-2 svg-icon-primary dark:svg-icon-success'>
                      <SVG src={configIcon} />
                    </span>
                    {/* End Config Icon */}
                    <div className='flex justify-between items-center w-full '>
                      <span className='font-bold dark:text-success text-slate-500 group-hover:text-success dark:group-hover:text-white transition-all duration-300  '>
                        پیکربندی
                      </span>
                      <span className='font-bold dark:text-success text-slate-600 group-hover:text-success dark:group-hover:text-white transition-all duration-500 '>
                        
                      </span>
                    </div>
                  </div>
                  <h2 className='text-slate-500 dark:text-success font-light text-sm group-hover:text-success dark:group-hover:text-white transition-all duration-300 '>
                    مدیریت سامانه
                  </h2>
                </div>
                {/* End system Config */}
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
