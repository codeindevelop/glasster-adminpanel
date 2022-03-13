import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import InfoIcon from '@mui/icons-material/Info';
import HelpMobileRegisterModal from './HelpMobileRegisterModal';
import { registerMobileAction } from 'actions/auth/email-authentication/register/RegisterActions';

const mobileSchema = Yup.object().shape({
  mobile_number: Yup.string()
    .min(11, <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_MIN' />)
    .max(11, <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_REQUIRED' />),
});

export default function EnterPhoneNumberPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { accessTokenData, registerMobileSucMSG, registerMobileExisMSG } = useSelector(
    ({ auth }) => ({
      registerMobileSucMSG: auth.register.registerMobileSucMSG,
      registerMobileExisMSG: auth.register.registerMobileExisMSG,
      accessTokenData: auth.register.registerToken,
    }),
    shallowEqual
  );

  const initialValues = {
    mobile_number: '',
    accessToken: accessTokenData,
  };

  const mobileFormik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: mobileSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(registerMobileAction(values));
      }, 1000);
    },
  });

  useEffect(() => {
    if (registerMobileSucMSG === true) {
      // If user register Mobile success , system has enable mobile number step
      dispatch({ type: 'HANDEL_REGISTER_STEP', payload: 3 });
      setLoading(false);
    }
    if (registerMobileExisMSG === true) {
      setLoading(false);
    }
  }, [registerMobileSucMSG, registerMobileExisMSG]);

  return (
    <>
      {/* Begin Help Mobile Number Register Modal */}
      <HelpMobileRegisterModal />
      {/* End Help Mobile Number Register Modal */}
      {/* Begin Form */}
      <form onSubmit={mobileFormik.handleSubmit} className='mt-5 lg:p-5 p-2'>
        <div className='w-full flex flex-col   lg:gap-2 gap-4'>
          <span className='text-center flex justify-center items-center '>
            <CheckCircleIcon className='text-success' />
          </span>
          <span className='text-success font-bold font-iranyekan text-center text-lg'>
            <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_COMPILEMSG' />
          </span>
          <h2 className='text-center font-bold text-sm text-slate-600 mb-5 leading-[30px]'>
            {' '}
            <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_CONFIRM' />
          </h2>

          {/* Begin Password Input */}
          <div className=' w-full'>
            <TextField
              id='mobile_number'
              label={<FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_NUMBER' />}
              variant='outlined'
              disabled={loading}
              error={mobileFormik.errors.mobile_number && mobileFormik.touched.mobile_number}
              className='w-full text-center font-bold'
              {...mobileFormik.getFieldProps('mobile_number')}
            />
            {mobileFormik.errors.mobile_number && mobileFormik.touched.mobile_number && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold'>{mobileFormik.errors.mobile_number}</span>
              </div>
            )}
            {registerMobileExisMSG === true && (
              <div className='text-right text-danger font-normal text-sm my-3 '>
                <InfoIcon fontSize='small' />
                <span className='mx-2 font-bold leading-[30px]'>
                  {' '}
                  <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_EXIST' />
                </span>
              </div>
            )}
          </div>
          {/* End Password Input */}
        </div>
        {/* Begin Footer Links */}
        <div className=' flex justify-between p-5 my-5 w-full'>
          <Button disabled={loading} type='submit' variant='contained' className='font-bold '>
            <span className='text-light'>
              <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_NEXT' />
            </span>
          </Button>

          <Button
            onClick={(e) => dispatch({ type: 'HELP_REGISTER_MOBILE_MODAL', payload: true })}
            variant='text'
            className=' font-bold '
            disabled={loading}
          >
            <FormattedMessage id='AUTH_SIGNUP_MOBILEPAGE_HELP' />
          </Button>
        </div>
        {/* End Footer Links */}
      </form>
      {/* End Form */}
    </>
  );
}
