import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Button } from '@mui/material';
import { loginAction } from 'actions/auth/loginActions';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('فرمت ایمیل اشتباه می باشد')
    .min(3, 'حداقل 2 کلمه باید وارد شود')
    .max(50, 'طول کلمات بیش از 50 کاراکتر میسر نیست')
    .required('وارد کردن ایمیل الزامی می باشد'),
  password: Yup.string()
    .min(3, 'حداقل 2 کلمه باید وارد شود')
    .max(50, 'طول کلمات بیش از 50 کاراکتر میسر نیست')
    .required('وارد کردن رمز عبور الزامی می باشد'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { isAuthenticated, isLoginErr } = useSelector(
    ({ auth }) => ({
      isAuthenticated: auth.login.isAuthenticated,
      isLoginErr: auth.login.isLoginErr,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (isLoginErr === true) {
      setLoading(false);
    }
  }, [isLoginErr, isAuthenticated]);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(loginAction(values));
    },
  });
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 '>
        {/* Begin Content Wrapper */}
        <div className='shadow-sm border p-5 rounded-lg h-full '>
          <h2 className='text-center font-bold text-lg text-slate-700 my-5'>ورود به حساب کاربری</h2>

          <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan'>
            لطفا اطلاعات کاربری خود را جهت ورود به سامانه وارد کنید
          </h5>

          {/* Begin Form */}
          <form onSubmit={formik.handleSubmit} className='mt-5 lg:p-5 p-2'>
            <div className='my-5 w-full'>
              <TextField
                id='email'
                label='ایمیل'
                variant='outlined'
                className={clsx(
                  'w-full',
                  { 'is-invalid': formik.touched.email && formik.errors.email },
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-center text-danger'>
                  <span>{formik.errors.email}</span>
                </div>
              )}
            </div>
            <div className='my-5 w-full'>
              <TextField
                id='password'
                label='رمز عبور'
                variant='outlined'
                type='password'
                className={clsx(
                  'w-full',
                  { 'is-invalid': formik.touched.password && formik.errors.password },
                  {
                    'is-valid': formik.touched.password && !formik.errors.password,
                  }
                )}
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <div className='text-center text-danger'>
                  <span>{formik.errors.password}</span>
                </div>
              )}
            </div>
            <div className='flex items-center justify-center'>
              {!loading && (
                <Button
                  type='submit'
                  variant='contained'
                  className='w-full h-[50px] rounded-lg font-bold mb-3'
                >
                  <span className='text-light'>ورود به سیستم</span>
                </Button>
              )}
              {loading && <CircularProgress />}
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
