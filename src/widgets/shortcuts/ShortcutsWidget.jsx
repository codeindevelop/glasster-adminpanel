import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import Skeleton from '@mui/material/Skeleton';
import plusIcon from 'img/icons/general/gen035.svg';
import configIcon from 'img/icons/coding/cod009.svg';
import editIcon from 'img/icons/general/gen055.svg';
import addUserIcon from 'img/icons/general/gen049.svg';
import headSVG from 'img/illustrations/monitor.svg';
import headSVGDark from 'img/illustrations/1-dark.svg';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getDashbaodrDataAction } from 'actions/custom/dashboardActions';
import { Scale } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ShortcutsWidget() {
  const dispatch = useDispatch();
  const { first_name, postCategoriesCount, dir, postsCount, usersCount } = useSelector((state) => ({
    first_name: state.auth.user.user.first_name,
    dir: state.layout.config.direction,
    postCategoriesCount: state.dashboard.postCategoriesCount,
    postsCount: state.dashboard.postsCount,
    usersCount: state.dashboard.usersCount,
  }));

  useEffect(() => {
    dispatch(getDashbaodrDataAction());
  }, []);
  return (
    <>
      <div className='relative z-1 w-full h-[33rem] dark:bg-[#1e1e2d] shadow-lg rounded-lg'>
        {/* Begin Inner Wrapper */}
        <div className='flex flex-col items-center justify-center'>
          {/* Begin Top Section */}
          <div className='blue-gradient cover-img relative w-full h-[15rem] flex items-center rounded-lg'>
            <div className='flex items-center w-full'>
              {/* Check if redux store not loaded , try to display loading */}
              {usersCount === null ? (
                <>
                  <Skeleton
                    sx={{ width: '75%', height: '0.6rem' }}
                    animation='wave'
                    variant='rectangular'
                  />
                  <Skeleton width='100%' />
                </>
              ) : (
                <>
                  {/* Begin Main Pic */}
                  {dir === 'rtl' ? (
                    <>
                      <SVG
                        className='relative  right-0 scale-[1.4] ml-8 w-[100px]  md:my-0'
                        src={headSVG}
                      />
                    </>
                  ) : (
                    <>
                      <SVG
                        className='relative translate-x-[-40%]  left-0 scale-[1.4]  w-[11rem]  md:my-0'
                        src={headSVG}
                      />
                    </>
                  )}
                  {/* End Main Pic */}
                  <div className='mt-5 flex flex-col gap-3'>
                    <h2 className='text-white  text-lg font-bold '>
                      <FormattedMessage id='DASHBOARD_WIDGET_HI' />{' '}
                      <span className='mx-1'>{first_name}</span>
                    </h2>
                    <h6 className='text-white  '>
                      <FormattedMessage id='DASHBOARD_WIDGET_HEAD' />
                    </h6>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* End Top Section */}

          {/* Begin Footer Section */}
          <div className='w-full absolute top-[35%] p-5 bg-light '>
            {/* Begin Boxes Wrapper */}
            <div className='flex flex-col gap-4  '>
              {/* Begin Top Shortcuts */}
              <div className='flex items-center justify-between gap-4 w-full  px-2'>
                {/* Begin Create Post */}
                <Link className='w-full' to='/post/new'>
                  <div className='group     h-[8.9rem]    flex flex-col gap-2 w-full border border-transparent hover:border-blue-700/20 hover:shadow-lg bg-light-primary dark:bg-dark-primary ease-in-out  shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                    {postsCount === null ? (
                      <>
                        <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                          <div>
                            <Skeleton sx={{ width: '75%', height: '0.9rem' }} animation='wave' />
                          </div>
                          <div className='flex  justify-between items-center w-full '>
                            <Skeleton width='40%' />
                            <Skeleton width='40%' />
                          </div>
                        </div>
                        <Skeleton width='100%' />
                      </>
                    ) : (
                      <>
                        <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                          {/* Begin Post  Icon */}
                          <span className='svg-icon svg-icon-2 svg-icon-primary'>
                            <SVG src={editIcon} />
                          </span>
                          {/* End Post Icon */}
                          <div className='flex justify-between items-center w-full '>
                            <span className='font-bold dark:text-primary text-slate-500 group-hover:text-primary dark:group-hover:text-white transition-all duration-300  '>
                              <FormattedMessage id='DASHBOARD_WIDGET_POSTS' />
                            </span>
                            <span className='font-bold dark:text-primary text-slate-600 group-hover:text-primary dark:group-hover:text-white transition-all duration-500 '>
                              {postsCount}
                            </span>
                          </div>
                        </div>
                        <h2 className='text-slate-500 dark:text-primary font-light text-sm group-hover:text-primary dark:group-hover:text-white transition-all duration-300 '>
                          <FormattedMessage id='DASHBOARD_WIDGET_ADDPOSTS' />
                        </h2>
                      </>
                    )}
                  </div>
                </Link>
                {/* End Create Post */}

                {/* Begin Post categories List */}
                <Link className='w-full'  to='/post/category/all'>
                  <div className='group h-[8.9rem] border border-transparent hover:border-blue-700/20  flex flex-col gap-2 w-full hover:shadow-lg bg-light-warning   dark:bg-dark-warning ease-in-out   shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                    {postCategoriesCount === null ? (
                      <>
                        <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                          <div>
                            <Skeleton sx={{ width: '75%', height: '0.9rem' }} animation='wave' />
                          </div>
                          <div className='flex  justify-between items-center w-full '>
                            <Skeleton width='40%' />
                            <Skeleton width='40%' />
                          </div>
                        </div>
                        <Skeleton width='100%' />
                      </>
                    ) : (
                      <>
                        <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                          {/* Begin Post category  Icon */}
                          <span className='svg-icon svg-icon-2 svg-icon-primary dark:svg-icon-warning'>
                            <SVG src={plusIcon} />
                          </span>
                          {/* End Post category Icon */}
                          <div className='flex justify-between items-center w-full '>
                            <span className='font-bold dark:text-warning text-slate-500 group-hover:text-warning dark:group-hover:text-white transition-all duration-300  '>
                              <FormattedMessage id='DASHBOARD_WIDGET_CATEGORIES' />
                            </span>
                            <span className='font-bold dark:text-warning text-slate-600 group-hover:text-warning dark:group-hover:text-white transition-all duration-500 '>
                              {postCategoriesCount}
                            </span>
                          </div>
                        </div>
                        <h2 className='text-slate-500 dark:text-warning font-light text-sm group-hover:text-warning dark:group-hover:text-white transition-all duration-300 '>
                          <FormattedMessage id='DASHBOARD_WIDGET_CATEGORY_LIST' />
                        </h2>
                      </>
                    )}
                  </div>
                </Link>
                {/* End Post categories List */}
              </div>
              {/* End Top Shortcuts */}

              {/* Begin Bottom Shortcuts */}
              <div className='flex items-center gap-4 px-2'>
                {/* Begin Create user */}
                <div className='group  h-[8.9rem] border border-transparent hover:border-blue-700/20  flex flex-col gap-2 w-full hover:shadow-lg bg-light-danger   dark:bg-dark-danger ease-in-out   shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  {usersCount === null ? (
                    <>
                      <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                        <div>
                          <Skeleton sx={{ width: '75%', height: '0.9rem' }} animation='wave' />
                        </div>
                        <div className='flex  justify-between items-center w-full '>
                          <Skeleton width='40%' />
                          <Skeleton width='40%' />
                        </div>
                      </div>
                      <Skeleton width='100%' />
                    </>
                  ) : (
                    <>
                      <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                        {/* Begin Post category  Icon */}
                        <span className='svg-icon svg-icon-2 svg-icon-primary dark:svg-icon-danger'>
                          <SVG src={addUserIcon} />
                        </span>
                        {/* End Post category Icon */}
                        <div className='flex justify-between items-center w-full '>
                          <span className='font-bold dark:text-danger text-slate-500 group-hover:text-danger dark:group-hover:text-white transition-all duration-300  '>
                            <FormattedMessage id='DASHBOARD_WIDGET_USERS' />
                          </span>
                          <span className='font-bold dark:text-danger text-slate-600 group-hover:text-danger dark:group-hover:text-white transition-all duration-500 '>
                            {usersCount}
                          </span>
                        </div>
                      </div>
                      <h2 className='text-slate-500 dark:text-danger font-light text-sm group-hover:text-danger dark:group-hover:text-white transition-all duration-300 '>
                        <FormattedMessage id='DASHBOARD_WIDGET_ADDUSERS' />
                      </h2>
                    </>
                  )}
                </div>
                {/* End Create user */}

                {/* Begin system Config */}
                <div className='group  h-[8.9rem] border border-transparent hover:border-blue-700/20  flex flex-col gap-2 w-full hover:shadow-lg bg-light-success   dark:bg-dark-success ease-in-out   shadow-sm  cursor-pointer transition-all duration-300   p-3 rounded-lg'>
                  {usersCount === null ? (
                    <>
                      <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                        <div>
                          <Skeleton sx={{ width: '75%', height: '0.9rem' }} animation='wave' />
                        </div>
                        <div className='flex  justify-between items-center w-full '>
                          <Skeleton width='40%' />
                          <Skeleton width='40%' />
                        </div>
                      </div>
                      <Skeleton width='100%' />
                    </>
                  ) : (
                    <>
                      <div className='flex   flex-col gap-8 mt-2 w-full   transition-all duration-300'>
                        {/* Begin Config  Icon */}
                        <span className='svg-icon svg-icon-2 svg-icon-primary dark:svg-icon-success'>
                          <SVG src={configIcon} />
                        </span>
                        {/* End Config Icon */}
                        <div className='flex justify-between items-center w-full '>
                          <span className='font-bold dark:text-success text-slate-500 group-hover:text-success dark:group-hover:text-white transition-all duration-300  '>
                            <FormattedMessage id='DASHBOARD_WIDGET_CONFIGURATION' />
                          </span>
                          <span className='font-bold dark:text-success text-slate-600 group-hover:text-success dark:group-hover:text-white transition-all duration-500 '></span>
                        </div>
                      </div>
                      <h2 className='text-slate-500 dark:text-success font-light text-sm group-hover:text-success dark:group-hover:text-white transition-all duration-300 '>
                        <FormattedMessage id='DASHBOARD_WIDGET_CONFIGURATION_DESC' />
                      </h2>
                    </>
                  )}
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
