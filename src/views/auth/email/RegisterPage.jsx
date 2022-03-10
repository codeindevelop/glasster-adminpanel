import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SVG from 'react-inlinesvg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import accIMG from 'img/account.svg';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useHistory();

  const { userExistCheck } = useSelector(
    ({ auth }) => ({
      userExistCheck: auth.login.userExistCheck,
    }),
    shallowEqual
  );
  return (
    <>
      <div className='flex justify-center p-1 w-full'>
        <div className='w-full md:w-2/3 md:shadow-sm mb-3 md:border p-5 rounded-lg h-auto flex  justify-around items-center '>
          <div className='hidden md:flex flex-col justif-center items-center p-10'>
            <SVG className='w-2/3' src={accIMG} />
            <h6 className='text-md font-pop  text-slate-500 text-center leading-[30px] my-5'>
              Bring your idea to life and get set up for success!
            </h6>
          </div>

          <div>
            <h2 className='text-right font-bold text-lg text-slate-700 my-5'>ثبت نام در سامانه</h2>

            <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan'>
              جهت ثبت نام در سامانه لطفا اطلاعات کاربری خود را وارد نمایید
            </h5>

            {/* Begin Form */}
            <form className='mt-5 lg:p-5 p-2'>
              <div className='w-full flex flex-col lg:flex-row  justify-between lg:gap-2 gap-4'>
                <div className=' w-full'>
                  <TextField id='first_name' label='نام' variant='outlined' className='w-full' />
                </div>
                <div className=' w-full'>
                  <TextField
                    id='last_name'
                    label='نام خانوادگی'
                    variant='outlined'
                    className='w-full'
                  />
                </div>
              </div>
              <div className='my-5 w-full'>
                <TextField
                  id='mobile_number'
                  label='شماره موبایل'
                  variant='outlined'
                  type='text'
                  className='w-full'
                />
              </div>
              <div className='my-5 w-full'>
                <TextField
                  id='email'
                  label='ایمیل'
                  variant='outlined'
                  type='text'
                  className='w-full'
                />
              </div>
              <div className='my-5 w-full'>
                <TextField
                  id='password'
                  label='رمزعبور'
                  variant='outlined'
                  type='password'
                  className='w-full'
                />
              </div>
              <div className='my-5 w-full'>
                <TextField
                  id='password_confirm'
                  label='تکرار رمزعبور'
                  variant='outlined'
                  type='password'
                  className='w-full'
                />
              </div>
              {/* Begin Footer Links */}
              <div className=' flex justify-between p-5 my-5 w-full'>
                <Button
                  onClick={(e) => router.push('/auth/signin')}
                  variant='text'
                  className=' font-bold '
                  disabled={loading}
                >
                  ورود
                </Button>
                <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
                  <span className='text-light'>مرحله بعد</span>
                </Button>
              </div>
              {/* End Footer Links */}
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </>
  );
}
