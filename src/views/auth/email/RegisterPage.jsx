import React from 'react';
import { TextField, Button as MUButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../../../@core/components/Button/Button';
export default function RegisterPage() {
  return (
    <>
      <div className='flex justify-center p-1 w-full'>
        <div className='w-full md:w-1/3 md:shadow-sm mb-3 md:border p-5 rounded-lg h-auto flex flex-col justify-center items-center '>
          <h2 className='text-center font-bold text-lg text-slate-700 my-5'>ثبت نام در سامانه</h2>

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
            <div className='my-5 w-full'>
              <Button className='w-full font-bold bg-primary rounded-md  hover:bg-blue-500'>
                ثبت نام در سامانه
              </Button>
            </div>
          </form>
          {/* End Form */}

          {/* Begin Footer Links */}
          <div className='p-5'>
            <Link className='my-3' to='/auth/signin'>
              <MUButton variant='outlined' className='w-full h-[50px] rounded-lg font-bold mb-3'>
                ورود به سامانه
              </MUButton>
            </Link>
            <Link className='my-3' to='/auth/forgot-password'>
              <MUButton variant='text' className='w-full h-[50px] font-bold my-3'>
                فراموشی رمز عبور
              </MUButton>
            </Link>
          </div>
          {/* End Footer Links */}
        </div>
      </div>
    </>
  );
}
