import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import SVG from 'react-inlinesvg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';

import { emailLoockupAction } from 'actions/auth/email-authentication/register/RegisterActions';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
};

const emailSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول نام بیش از 50 کاراکتر می باشد')
    .required('وارد کردن نام الزامی می باشد'),
  last_name: Yup.string()
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول نام بیش از 50 کاراکتر می باشد')
    .required('وارد کردن نام خانوادگی الزامی می باشد'),
  email: Yup.string()
    .email('فرمت ایمیل وارد شده اشتباه می باشد')
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول ایمیل بیش از 50 کاراکتر می باشد')
    .required('وارد کردن ایمیل الزامی می باشد'),
});

export default function EmailLoockupPage() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useHistory();

  const { emailExistERR, emailCanRegister } = useSelector(
    ({ auth }) => ({
      emailExistERR: auth.register.emailExistERR,
      emailCanRegister: auth.register.emailCanRegister,
    }),
    shallowEqual
  );

  const formik = useFormik({
    initialValues,
    validationSchema: emailSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(emailLoockupAction(values));
      }, 1000);
    },
  });

  useEffect(() => {
    if (emailExistERR === true) {
      setLoading(false);
    }
    if (emailCanRegister === true) {
      setLoading(false);
    }
  }, [emailExistERR, emailCanRegister]);

  return (
    <>
      {/* Begin Form */}
      <form onSubmit={formik.handleSubmit} className='mt-5 lg:p-5 p-2'>
        <div className='w-full flex flex-col lg:flex-row  justify-between lg:gap-2 gap-4'>
          <div className=' w-full'>
            <TextField
              id='first_name'
              label='نام'
              variant='outlined'
              disabled={loading}
              error={formik.errors.first_name && formik.touched.first_name}
              className='w-full'
              {...formik.getFieldProps('first_name')}
            />
            {formik.errors.first_name && formik.touched.first_name && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold'>{formik.errors.first_name}</span>
              </div>
            )}
          </div>
          <div className=' w-full'>
            <TextField
              id='last_name'
              label='نام خانوادگی'
              variant='outlined'
              disabled={loading}
              error={formik.errors.last_name && formik.touched.last_name}
              className='w-full'
              {...formik.getFieldProps('last_name')}
            />
            {formik.errors.last_name && formik.touched.last_name && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold'>{formik.errors.last_name}</span>
              </div>
            )}
          </div>
        </div>

        <div className='my-5 w-full'>
          <TextField
            id='email'
            label='ایمیل'
            variant='outlined'
            type='text'
            disabled={loading}
            error={formik.errors.email && formik.touched.email}
            className='w-full'
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email && (
            <div className='text-right text-danger font-normal text-sm my-3 '>
              <InfoIcon fontSize='small' />
              <span className='mx-2 font-bold'>{formik.errors.email}</span>
            </div>
          )}

          {/* If Email Registred by another user */}
          {emailExistERR === true && (
            <div className='text-right text-danger font-normal text-sm my-3 '>
              <InfoIcon fontSize='small' />
              <span className='mx-2 font-bold'>ایمیل وارد شده قبلا ثبت شده است</span>
            </div>
          )}
        </div>

        {/* Begin Footer Links */}
        <div className=' flex justify-between p-5 my-5 w-full'>
          <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
            <span className='text-light'>مرحله بعد</span>
          </Button>
          <Button
            onClick={(e) => router.push('/auth/signin')}
            variant='text'
            className=' font-bold '
            disabled={loading}
          >
            رفتن به صفحه ورود
          </Button>
        </div>
        {/* End Footer Links */}
      </form>
      {/* End Form */}
    </>
  );
}
