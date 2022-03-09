import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';
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
  const router = useHistory();

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
      <div className='flex justify-center p-1 w-full'>
        <div className='w-full md:w-1/3 md:shadow-sm md:border p-5 rounded-lg flex flex-col justify-center items-center '>
          <h2 className='text-center font-bold text-lg text-slate-700 my-5'>ورود به حساب کاربری</h2>

          <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan'>
            لطفا اطلاعات کاربری خود را جهت ورود به سامانه وارد کنید
          </h5>

          {/* Begin Form */}
          <form onSubmit={formik.handleSubmit} className='mt-5 lg:p-5 p-2 w-full'>
            <div className='my-5 w-full'>
              <TextField
                id='email'
                label='ایمیل'
                variant='outlined'
                error={formik.errors.email}
                className='w-full'
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && (
                <div className='text-right text-danger font-normal text-sm my-3 '>
                  <span className='mx-2 font-bold'>{formik.errors.email}</span>
                  <InfoIcon fontSize='small' />
                </div>
              )}
            </div>

            {/* Begin Forgot Password Lins */}
            {/* <Link>

            </Link> */}
            {/* End Forgot Password Lins */}

            <div className='flex items-center justify-start'>
              <Link to='/forgot-email'>
                <span className='text-blue-400 font-bold text-md '>
                  ایمیل خود را فراموش کرده اید ؟
                </span>
              </Link>
            </div>
          </form>
          {/* End Form */}

          {/* Begin Footer Links */}
          <div className=' flex justify-between p-5 mt-5 w-full'>
            <Button
              onClick={(e) => router.push('/auth/register')}
              variant='text'
              className=' font-bold '
            >
              ثبت نام
            </Button>
            <Button type='submit' variant='contained' className='font-bold '>
              <span className='text-light'>مرحله بعد</span>
            </Button>
          </div>
          {/* End Footer Links */}
        </div>
      </div>
    </>
  );
}
