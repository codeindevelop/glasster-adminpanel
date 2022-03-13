import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import SVG from 'react-inlinesvg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FormattedMessage } from 'react-intl';
import InfoIcon from '@mui/icons-material/Info';

import { emailLoockupAction } from 'actions/auth/email-authentication/register/RegisterActions';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
};

const emailSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, <FormattedMessage id='AUTH_SIGNUP_LOOCK_NAME_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_LOOCK_NAME_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_LOOCK_NAME_REQUIRED' />),
  last_name: Yup.string()
    .min(2, <FormattedMessage id='AUTH_SIGNUP_LOOCK_LNAME_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_LOOCK_LNAME_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_LOOCK_LNAME_REQUIRED' />),
  email: Yup.string()
    .email(<FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_FORMAT' />)
    .min(2, <FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_REQUIRED' />),
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
              label={<FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_FIRSTNAME' />}
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
              label={<FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_LASTNAME' />}
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
            label={<FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_EMAIL' />}
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
              <span className='mx-2 font-bold'>
                <FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_EXIST' />
              </span>
            </div>
          )}
        </div>

        {/* Begin Footer Links */}
        <div className=' flex justify-between p-5 my-5 w-full'>
          <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
            <span className='text-light'>
              <FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_NEXT' />
            </span>
          </Button>
          <Button
            onClick={(e) => router.push('/auth/signin')}
            variant='text'
            className=' font-bold '
            disabled={loading}
          >
            <FormattedMessage id='AUTH_SIGNUP_LOOCK_EMAIL_GOLOGIN' />
          </Button>
        </div>
        {/* End Footer Links */}
      </form>
      {/* End Form */}
    </>
  );
}
