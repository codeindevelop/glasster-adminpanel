import React from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5  '>
        {/* Begin Content Wrapper */}
        <div className='shadow-sm border p-5 rounded-lg h-full '>
          <h2 className='text-center font-bold text-lg text-slate-700 my-5'>فراموشی رمز عبور</h2>

          <h5 className='text-center max-w-3xl text-xl leading-10 text-slate-600 font-yekan'>
            در صورتی که رمز عبور خود را فراموش کرده اید ، لطفا ایمیل خود را وارد نمایید و بر روی
            گزینه بازیابی رمز عبور کلیک کنید تا لینک بازیابی رمز عبور برای شما ارسال گردد
          </h5>

          {/* Begin Form */}
          <form className='mt-5 lg:p-5 p-2'>
            <div className='my-5 w-full'>
              <TextField id='email' label='ایمیل' variant='outlined' className='w-full' />
            </div>

            <div className='my-5 w-full'>
              <Button variant='contained' className='w-full h-[50px] rounded-lg font-bold'>
                بازیابی رمز عبور
              </Button>
            </div>
          </form>
          {/* End Form */}

          {/* Begin Footer Links */}
          <div className='p-5'>
            <Link className='my-3' to='/auth/register'>
              <Button variant='outlined' className='w-full h-[50px] rounded-lg font-bold mb-3'>
                ثبت نام در سامانه
              </Button>
            </Link>
            <Link className='my-3' to='/auth/forgot-password'>
              <Button variant='text' className='w-full h-[50px] font-bold my-3'>
                فراموشی رمز عبور
              </Button>
            </Link>
          </div>
          {/* End Footer Links */}
        </div>
        {/* End Content Wrapper */}
      </div>
    </>
  );
}
