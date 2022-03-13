import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import InfoIcon from '@mui/icons-material/Info';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import {
  confirmMobileCodeAction,
  getMobileCodeAction,
} from 'actions/auth/email-authentication/register/RegisterActions';

import 'react-circular-progressbar/dist/styles.css';

const codeInputprops = {
  inputStyle: {
    fontFamily: 'pelak',
    textAlign: 'center',
    margin: '5px',
    MozAppearance: 'textfield',
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#f2f2f5',
    color: '#67737d',
  },
  inputStyleInvalid: {
    margin: '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '26px',
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'red',
    border: '1px solid red',
  },
};

const codeSchema = Yup.object().shape({
  mobile_number: Yup.string().required(<FormattedMessage id='AUTH_SIGNUP_CONFIRM_MOB' />),
});

export default function ConfirmMobilePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [confirmCode, setConfirmCode] = useState(0);

  const {
    registerMobileSucMSG,
    accessTokenData,
    getOtpCodeAgain,
    tempRegisterMobile,
    mobileConfirmErrMSG,
  } = useSelector(
    ({ auth }) => ({
      registerMobileSucMSG: auth.register.registerMobileSucMSG,
      accessTokenData: auth.register.registerToken,
      mobileConfirmErrMSG: auth.register.mobileConfirmErrMSG,
      tempRegisterMobile: auth.register.tempRegisterMobile,
      getOtpCodeAgain: auth.register.getOtpCodeAgain,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (registerMobileSucMSG === true) {
      setCounter(60);
    }
    if (mobileConfirmErrMSG === true) {
      setLoading(false);
    }
    if (getOtpCodeAgain === true) {
      setLoading(false);
    }
  }, [counter, registerMobileSucMSG, confirmCode, getOtpCodeAgain]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      confirm_code: confirmCode,
      accessToken: accessTokenData,
    };

    dispatch(confirmMobileCodeAction(body));
  };

  // Request to Get New OTP Code From Server
  const getNewCode = (e) => {
    setLoading(true);
    setCounter(60);
    const body = {
      tempRegisterMobile,
      accessToken: accessTokenData,
    };
    dispatch(getMobileCodeAction(body));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='my-3'>
          <h2 className='font-bold text-center text-sm text-slate-600 mb-5 leading-[30px]'>
            <FormattedMessage id='AUTH_SIGNUP_CONFIRM_ENTER_CODE' />
          </h2>
          <div className='flex justify-center items-center my-7' style={{ direction: 'ltr' }}>
            <TextField
              id='confirm_code'
              label={<FormattedMessage id='AUTH_SIGNUP_CONFIRM_CODE' />}
              variant='outlined'
              type='number'
              disabled={loading}
              error={mobileConfirmErrMSG}
              className='w-full'
              onChange={(e) => setConfirmCode(e.target.value)}
            />
          </div>
          {mobileConfirmErrMSG === true && (
            <>
              <div className='flex text-danger items-center justify-center my-5'>
                <InfoIcon fontSize='small' />
                <span className=' font-bold text-danger text-sm text-center'>
                  <FormattedMessage id='AUTH_SIGNUP_WRONG_CODE' />
                </span>
              </div>
            </>
          )}
          {getOtpCodeAgain === true && (
            <>
              <div className='flex items-center my-5 gap-1'>
                <span className=' font-bold text-success text-lg'>
                  <FormattedMessage id='AUTH_SIGNUP_SEND_AGAIN_CODE' />
                </span>
              </div>
            </>
          )}
        </div>

        <div className='flex flex-col justify-center items-center'>
          {counter > 0 ? (
            <>
              <div
                style={{
                  width: '50px',
                  textAlign: 'center',
                  margin: '0 auto',
                }}
              >
                <CircularProgressbar
                  value={counter}
                  maxValue={60}
                  strokeWidth={10}
                  background
                  backgroundPadding={20}
                  styles={buildStyles({
                    backgroundColor: '#191c45',
                    textColor: '#fff',
                    pathColor: '#fff',
                    trailColor: 'transparent',
                  })}
                />
              </div>
              <p className='font-bold text-sky-400 text-md my-5 font-pelak'>{counter}</p>
            </>
          ) : null}
          <Button
            //   onClick={(e) => dispatch({ type: 'HANDLE_SEND_MOBILE_CODE' })}
            onClick={(e) => getNewCode()}
            variant='contained'
            color='secondary'
            className='font-bold my-2'
            disabled={loading || counter > 0}
          >
            <FormattedMessage id='AUTH_SIGNUP_SEND_AGAIN' />
          </Button>
        </div>
        <div className='flex items-center justify-between mt-10'>
          <Button type='submit' variant='contained' className='font-bold' disabled={loading}>
            <FormattedMessage id='AUTH_SIGNUP_SEND_CONFIRM' />
          </Button>

          <Button
            onClick={(e) => {
              dispatch({ type: 'HANDEL_REGISTER_STEP', payload: 2 });
              setCounter(0);
            }}
            variant='contained'
            className='font-bold'
            disabled={loading}
          >
            <FormattedMessage id='AUTH_SIGNUP_CHANGE_MOBILE' />
          </Button>
        </div>
      </form>
    </>
  );
}
