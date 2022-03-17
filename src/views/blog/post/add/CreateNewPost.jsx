import React from 'react';
import { useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import backIcon from 'img/icons/arrows/arr063.svg';
import saveIcon from 'img/icons/arrows/arr085.svg';
export default function CreateNewPost() {
  const router = useHistory();

  const backToPostLists = () => {
    history.push(`/post/all`);
  };

  const goNewPostPage = () => {
    history.push(`/post/new`);
  };
  return (
    <>
      {/* Begin Container */}
      <div className=''>
        <div className='flex flex-col items-center gap-4 w-full'>
          {/* Begin Top Toolbar */}
          <div className='bg-white dark:bg-[#1e1e2d] animation-all duration-300 w-full rounded-lg  shadow-md'>
            <div className='p-5 flex md:justify-between items-center md:flex-row gap-3 flex-col sm:justify-center'>
              <h2 className='font-normal text-sm text-gray-800 dark:text-white'>
                ایجاد مقاله جدید
              </h2>
              <div className='flex justify-between items-center'>
                <button
                  onClick={goNewPostPage}
                  className='bg-primary mx-2 px-3 py-2 rounded-[0.475rem] text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
                >
                  <span className='text-sm text-light fw-light'>ذخیره</span>
                  <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                    <SVG src={saveIcon} />
                  </span>
                </button>
                <button
                  onClick={backToPostLists}
                  className='bg-primary mx-2 px-3 py-2 rounded-[0.475rem] text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
                >
                  <span className='text-sm text-light fw-light'>بازگشت به لیست مقالات</span>
                  <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                    <SVG src={backIcon} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* End Top Toolbar */}

          {/* Begin Content Form */}
          <div className='w-full flex flex-col md:flex-row  items-center gap-4 '>
            {/* Begin Content */}
            <div className='flex flex-row md:w-[70%] sm:w-full bg-white dark:bg-[#1e1e2d] animation-all duration-300 w-full rounded-lg  shadow-md p-5'>
              <div className=''>start</div>
            </div>
            {/* End Content */}

            {/* Begin Aside */}
            <div className='flex flex-row md:w-[30%] sm:w-full sm:col-end-12  bg-white dark:bg-[#1e1e2d] animation-all duration-300 w-full rounded-lg  shadow-md p-5'>
              <div className=''>end</div>
            </div>
            {/* End Aside */}
          </div>
          {/* End Conten Form */}
        </div>{' '}
      </div>
      {/* End Container */}
    </>
  );
}
