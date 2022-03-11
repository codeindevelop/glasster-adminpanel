import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { registerPasswordAction } from 'actions/auth/email-authentication/register/RegisterActions';

const passwordSchema = Yup.object().shape({
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
});

export default function EnterEmailPasswordPage() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const {
    registerSucMSGData,
    registerErrMSGData,
    tempRegisterFirstName,
    tempRegisterLastName,
    tempRegisterEmail,
  } = useSelector(
    ({ auth }) => ({
      registerSucMSGData: auth.register.registerSucMSG,
      registerErrMSGData: auth.register.registerErrMSG,
      tempRegisterFirstName: auth.register.tempRegisterFirstName,
      tempRegisterLastName: auth.register.tempRegisterLastName,
      tempRegisterEmail: auth.register.tempRegisterEmail,
    }),
    shallowEqual
  );

  const initialValues = {
    first_name: tempRegisterFirstName,
    last_name: tempRegisterLastName,
    email: tempRegisterEmail,
    password: '',
    password_confirmation: '',
  };

  const passwordFormik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(registerPasswordAction(values));
      }, 1000);
    },
  });

  useEffect(() => {
    if (registerSucMSGData === true) {
      // If user register success , system has enable mobile number step
      dispatch({ type: 'HANDEL_REGISTER_STEP', payload: 2 });
      setLoading(false);
    }
    if (registerErrMSGData === true) {
      setLoading(false);
    }
  }, [registerSucMSGData, registerErrMSGData]);

  return (
    <>
      {/* Begin Form */}
      <form onSubmit={passwordFormik.handleSubmit} className='mt-5 lg:p-5 p-2'>
        <div className='w-full flex flex-col  lg:gap-2 gap-4'>
          <h2 className='text-center font-bold text-sm text-slate-600 mb-5'>
            لطفا رمز عبور برای حساب کاربری خود وارد نمایید
          </h2>
          {/* Begin Password Input */}
          <div className=' w-full'>
            <TextField
              id='password'
              label='رمز عبور'
              variant='outlined'
              disabled={loading}
              type='password'
              error={passwordFormik.errors.password && passwordFormik.touched.password}
              className='w-full'
              {...passwordFormik.getFieldProps('password')}
            />
            {passwordFormik.errors.password && passwordFormik.touched.password && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold'>{passwordFormik.errors.password}</span>
              </div>
            )}
          </div>
          {/* End Password Input */}
          {/* Begin password confirmation */}
          <div className=' w-full my-2'>
            <TextField
              id='password_confirmation'
              label='تکرار رمز عبور'
              variant='outlined'
              disabled={loading}
              type='password'
              error={
                passwordFormik.errors.password_confirmation &&
                passwordFormik.touched.password_confirmation
              }
              className='w-full'
              {...passwordFormik.getFieldProps('password_confirmation')}
            />
            {passwordFormik.errors.password_confirmation &&
              passwordFormik.touched.password_confirmation && (
                <div className='text-right text-danger font-normal text-sm my-3 '>
                  <InfoIcon fontSize='small' />
                  <span className='mx-2 font-bold'>
                    {passwordFormik.errors.password_confirmation}
                  </span>
                </div>
              )}
          </div>
          {/* End password confirmation */}
        </div>
        {/* Begin Accept Trem */}
        <div className='my-3'>
          <FormControlLabel
            control={<Checkbox required />}
            label={
              <>
                <h6 className='font-bold text-slate-600 leading-[30px] text-sm'>
                  تمامی{' '}
                  <span
                    className='text-bold text-sky-500 hover:text-sky-700 transform-all duration-300 pointer'
                    onClick={(e) => dispatch({ type: 'TERMS_MODAL', payload: true })}
                  >
                    شرایط و قوانین
                  </span>{' '}
                  قبل از ثبت نام را مطالعه کرده و قبول دارم
                </h6>
              </>
            }
          />
        </div>
        {/* End Accept Trem */}

        {/* Begin Footer Links */}
        <div className=' flex justify-between p-5 my-5 w-full'>
          <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
            <span className='text-light'>مرحله بعد</span>
          </Button>
          <Button
            onClick={(e) => dispatch({ type: 'HANDEL_REGISTER_STEP', payload: 0 })}
            variant='text'
            className=' font-bold '
            disabled={loading}
          >
            بازگشت
          </Button>
        </div>
        {/* End Footer Links */}
      </form>
      {/* End Form */}
    </>
  );
}
