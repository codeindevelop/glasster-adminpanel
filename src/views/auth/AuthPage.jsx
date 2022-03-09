import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import ForgotPasswordPage from './email/ForgotPasswordPage';
import LoginPage from './email/LoginPage';
import RegisterPage from './email/RegisterPage';
import Logo from '../../@core/assets/img/logo/logo.svg';
import headerPic from '../../@core/assets/img/auth-header.png';

export default function AuthPage() {
  return (
    <>
      {/* Begin BackPic */}
      <div className='absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none'>
        <div className='w-[108rem] flex-none flex justify-end'>
          <img
            className='w-[71.75rem] flex-none max-w-none dark:hidden'
            src={headerPic}
            alt='header'
          />
        </div>
      </div>
      <div className='flex h-screen '>
        {/* Begin Aside */}
        <div className='hidden shadow-md lg:w-[650px] md:w-[400px] bg-slate-50 h-screen md:flex flex-col items-center justify-center p-3'>
          {/* Begin Logo */}
          <SVG src={Logo} className='text-center lg:w-[80px] lg:h-[80px]' />
          <div className='p-5 flex flex-col gap-3 align-items-center justify-center mb-10'>
            <h2 className='font-bold text-slate-600 text-lg text-center'>سامانه مدیریت وب سایت</h2>
            <h5 className='font-pop text-slate-500 text-lg text-center '>
              Glasster Website Manager
            </h5>
          </div>

          <h5 className='font-pop text-center text-md font-light text-slate-800'>
            Discover Amazing Software with great build tools
          </h5>
          <h6 className='font-pelak text-center font-bold text-lg text-slate-600 my-4'>
            با چند کلیک مدیریت اطلاعات خود را انجام دهید!
          </h6>
        </div>
        {/* End Aside */}
        <div className='w-full h-screen mb-3 md:mb-0  flex flex-col'>
          <div className='lg:hidden mt-5 flex flex-col items-center justify-center '>
            <SVG src={Logo} className='text-center flex items-center lg:w-[80px] lg:h-[80px]' />
            <div className='p-5 flex flex-col gap-3 align-items-center justify-center '>
              <h2 className='font-bold text-slate-600 text-lg text-center'>
                سامانه مدیریت وب سایت
              </h2>
              <h5 className='font-pop text-slate-500 text-lg text-center '>
                Glasster Website Manager
              </h5>
            </div>
          </div>
          <Switch>
            <Route path='/auth/login' exact component={LoginPage} />
            <Route path='/auth/register' exact component={RegisterPage} />
            <Route path='/auth/forgot-password' exact component={ForgotPasswordPage} />

            <Redirect from='/auth' to='/auth/login' />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </div>
    </>
  );
}
