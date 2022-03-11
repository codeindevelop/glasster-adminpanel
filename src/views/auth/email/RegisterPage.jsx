import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import SVG from 'react-inlinesvg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';
import accIMG from 'img/account.svg';

const initialValues = {
  first_name: '',
  last_name: '',
  mobile_number: '',
  email: '',
  password: '',
  password_confirmation: '',
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول نام بیش از 50 کاراکتر می باشد')
    .required('وارد کردن نام الزامی می باشد'),
  last_name: Yup.string()
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول نام بیش از 50 کاراکتر می باشد')
    .required('وارد کردن نام خانوادگی الزامی می باشد'),
  mobile_number: Yup.string()
    .min(11, 'شماره موبایل حداقل باید 11 رقم باشد')
    .max(11, 'شماره موبایل بیش از 11 رقم نمی تواند باشد')
    .required('وارد کردن شماره تلفن همراه الزامی می باشد'),
  email: Yup.string()
    .email('فرمت ایمیل وارد شده اشتباه می باشد')
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول ایمیل بیش از 50 کاراکتر می باشد')
    .required('وارد کردن ایمیل الزامی می باشد'),
  password: Yup.string()
    .min(2, 'وارد کردن حداقل 2 کلمه الزامی است')
    .max(50, 'طول نام بیش از 50 کاراکتر می باشد')
    .required('وارد کردن رمز عبور الزامی می باشد'),
  password_confirmation: Yup.string()
    .required('وارد کردن تایید رمز عبور الزامی می باشد')
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'رمز عبور وارد شده با هم یکسان نمی باشد'),
    }),
  acceptTerms: Yup.bool().required('جهت ثبت نام حتما باید با شرایط و قوانین موافقت نمایید'),
});

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useHistory();

  const { registerSucMSGData, registerErrMSGData } = useSelector(
    ({ auth }) => ({
      registerSucMSGData: auth.register.registerSucMSG,
      registerErrMSGData: auth.register.registerErrMSG,
    }),
    shallowEqual
  );

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        // dispatch(registerAction(values));
      }, 1000);
    },
  });

  useEffect(() => {
    if (registerSucMSGData === true) {
      setLoading(false);
    }
    if (registerErrMSGData === true) {
      setLoading(false);
    }
  }, [registerSucMSGData, registerErrMSGData]);

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
            <h2 className='text-center md:text-right font-bold text-lg text-slate-700 my-5'>ثبت نام در سامانه</h2>

            <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan'>
              جهت ثبت نام در سامانه لطفا اطلاعات کاربری خود را وارد نمایید
            </h5>

            {/* Begin Form */}
            <form onSubmit={formik.handleSubmit} className='mt-5 lg:p-5 p-2'>
              <div className='w-full flex flex-col lg:flex-row  justify-between lg:gap-2 gap-4'>
                <div className=' w-full'>
                  <TextField
                    id='first_name'
                    label='نام'
                    variant='outlined'
                    disabled={loading}
                    error={formik.errors.first_name}
                    className='w-full'
                    {...formik.getFieldProps('first_name')}
                  />
                  {formik.errors.first_name && (
                    <div className='text-right text-danger font-normal text-sm my-3 '>
                      <span className='mx-2 font-bold'>{formik.errors.first_name}</span>
                      <InfoIcon fontSize='small' />
                    </div>
                  )}
                </div>
                <div className=' w-full'>
                  <TextField
                    id='last_name'
                    label='نام خانوادگی'
                    variant='outlined'
                    disabled={loading}
                    error={formik.errors.last_name}
                    className='w-full'
                    {...formik.getFieldProps('last_name')}
                  />
                   {formik.errors.last_name && (
                    <div className='text-right text-danger font-normal text-sm my-3 '>
                      <span className='mx-2 font-bold'>{formik.errors.last_name}</span>
                      <InfoIcon fontSize='small' />
                    </div>
                  )}
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
