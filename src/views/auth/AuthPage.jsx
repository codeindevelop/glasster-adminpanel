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
      <div className='relative h-full'>
        {/* Begin Top Light Pic */}
        <div className='absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none'>
          <div className='w-[108rem] flex-none flex justify-end'>
            <img
              className='w-[71.75rem] flex-none max-w-none dark:hidden'
              src={headerPic}
              alt='header'
            />
          </div>
        </div>

        <div className='flex flex-col '>
          <div className=' mt-5 flex flex-col items-center justify-center '>
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
