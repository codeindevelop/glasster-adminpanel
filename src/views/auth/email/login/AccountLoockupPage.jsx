import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';
import { TextField, Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import { accountLoockupAction } from 'actions/auth/email-authentication/login/LoginActions';
import SelectAuthLang from '../select-lang/SelectAuthLang';
import FooterLinks from '../FooterLinks';

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email('فرمت ایمیل اشتباه می باشد')
    .min(3, 'حداقل 2 کلمه باید وارد شود')
    .max(50, 'طول کلمات بیش از 50 کاراکتر میسر نیست')
    .required('وارد کردن ایمیل الزامی می باشد'),
});

const initialValues = {
  email: '',
};

export default function AccountLoockupPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useHistory();

  const { userExistCheck } = useSelector(
    ({ auth }) => ({
      userExistCheck: auth.login.userExistCheck,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (userExistCheck === true) {
      setLoading(false);
      router.push('/auth/enter-password');
    }
    if (userExistCheck === false) {
      setLoading(false);
    }
  }, [userExistCheck]);

  const formik = useFormik({
    initialValues,
    validationSchema: emailSchema,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(accountLoockupAction(values));
      console.log('okkkk');
    },
  });
  return (
    <>
      <div
        style={{ direction: 'rtl' }}
        className='flex flex-col justify-center p-2 w-full mx-auto md:w-1/3'
      >
        <div className='w-full md:shadow-sm md:border rounded-lg flex flex-col justify-center items-center '>
          {loading && <LinearProgress className='w-full rounded-lg' />}
          <h2 className='text-center font-bold text-lg text-slate-700 mt-10'>
            ورود به حساب کاربری
          </h2>

          <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan my-5'>
            لطفا اطلاعات کاربری خود را جهت ورود به سامانه وارد کنید
          </h5>

          {/* Begin Form */}
          <form onSubmit={formik.handleSubmit} className='mt-2 lg:p-6 p-10 w-full'>
            <TextField
              id='useremail'
              label='ایمیل'
              variant='outlined'
              disabled={loading}
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
            {/* If user dosnt exist */}
            {userExistCheck === false && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <span className='mx-2 font-bold'>حساب کاربری با ایمیل وارد شده پیدا نشد</span>
                <InfoIcon fontSize='small' />
              </div>
            )}

            {/* Begin Forgot Password Lins */}
            {/* <Link>

            </Link> */}
            {/* End Forgot Password Lins */}

            {/* <div className='flex items-center justify-start'>
              <Button
                onClick={(e) => router.push('/auth/register')}
                variant='text'
                className=' font-bold '
                disabled={loading}
              >
                ایمیل خود را فراموش کرده اید ؟
              </Button>
            </div> */}

            {/* Begin Footer Links */}
            <div className=' flex justify-between p-5 my-5 w-full'>
              <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
                <span className='text-light'>مرحله بعد</span>
              </Button>
              <Button
                onClick={(e) => router.push('/auth/signup')}
                variant='text'
                className=' font-bold '
                disabled={loading}
              >
                ثبت نام
              </Button>
            </div>
            {/* End Footer Links */}
          </form>
          {/* End Form */}
        </div>
        {/* Begin Footer Box Items */}
        <footer className='w-full m-auto  flex  items-center justify-center md:px-0 sm:px-5'>
          <div className='flex w-full items-center justify-between my-3  '>
            {/* Begin Change Language Component */}
            <SelectAuthLang />
            {/* End Change Language Component */}
            {/* Begin Footer Links */}
            <FooterLinks />
            {/* End Footer Links */}
          </div>
        </footer>
        {/* End Footer Box Items */}
      </div>
    </>
  );
}
