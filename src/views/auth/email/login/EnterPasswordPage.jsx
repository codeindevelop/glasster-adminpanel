import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';
import { TextField, Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { FormattedMessage } from 'react-intl';

import { loginAction } from 'actions/auth/email-authentication/login/LoginActions';
import SelectAuthLang from '../select-lang/SelectAuthLang';
import FooterLinks from '../FooterLinks';

const passwordSchema = Yup.object().shape({
  password: Yup.string().required(<FormattedMessage id='AUTH_LOGIN_PASSWORD_REQUIRE' />),
});

export default function EnterPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const router = useHistory();

  const { isLoginErr, tempLoginEmail } = useSelector(
    ({ auth }) => ({
      isLoginErr: auth.login.isLoginErr,
      tempLoginEmail: auth.login.tempLoginEmail,
    }),
    shallowEqual
  );

  console.log(email);

  const initialValues = {
    email: email,
    password: '',
  };

  useEffect(() => {
    if (isLoginErr === true) {
      setLoading(false);
    }

    if (tempLoginEmail.lenght != 0) {
      setEmail(tempLoginEmail);
    }
    if (tempLoginEmail === '') {
      router.push('/auth');
    }
  }, [isLoginErr, tempLoginEmail]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(loginAction(values));
    },
  });
  return (
    <>
      <div
        style={{ direction: 'rtl' }}
        className='flex flex-col mx-auto p-2 justify-center w-full md:w-1/3'
      >
        <div className='w-full  md:shadow-sm md:border rounded-lg flex flex-col justify-center items-center '>
          {loading && <LinearProgress className='w-full rounded-lg' />}
          <h2 className='text-center font-bold text-lg text-slate-700 mt-10'>رمز عبور کاربری</h2>

          <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan my-5'>
            <FormattedMessage id='AUTH_LOGIN_PASSWORD_HEAD' />
          </h5>

          {/* Begin Form */}
          <form onSubmit={formik.handleSubmit} className='mt-2 lg:p-6 p-10 w-full'>
            <TextField
              id='password'
              label={<FormattedMessage id='AUTH_LOGIN_PASSWORD_PASS' />}
              variant='outlined'
              type='password'
              disabled={loading}
              error={formik.errors.password}
              className='w-full'
              {...formik.getFieldProps('password')}
            />
            {formik.errors.password && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold'>{formik.errors.password}</span>
              </div>
            )}
            {/* If user dosnt exist */}
            {isLoginErr === true && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold'>
                  <FormattedMessage id='AUTH_LOGIN_PASSWORD_FAILD' />
                </span>
              </div>
            )}

            {/* Begin Footer Links */}
            <div className=' flex justify-between p-5 my-5 w-full'>
              <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
                <span className='text-light'>
                  <FormattedMessage id='AUTH_LOGIN_PASSWORD_NEXT' />
                </span>
              </Button>
              <Button
                onClick={(e) => router.push('/auth/forgot-password')}
                variant='text'
                className=' font-bold '
                disabled={loading}
              >
                <FormattedMessage id='AUTH_LOGIN_PASSWORD_FORGOT' />
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
