import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import SVG from 'react-inlinesvg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LinearProgress from '@mui/material/LinearProgress';
import accIMG from 'img/account.svg';
import personalIMG from 'img/personal.svg';
import EmailLoockupPage from './EmailLoockupPage';
import EnterEmailPasswordPage from './EnterEmailPasswordPage';
import EnterPhoneNumberPage from './EnterPhoneNumberPage';
import ConfirmMobilePage from './ConfirmMobilePage';
import SelectAuthLang from '../select-lang/SelectAuthLang';
import FooterLinks from '../FooterLinks';
import { FormattedMessage } from 'react-intl';

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
    .min(2, <FormattedMessage id='AUTH_SIGNUP_NAME_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_NAME_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_NAME_REQUIRED' />),
  last_name: Yup.string()
    .min(2, <FormattedMessage id='AUTH_SIGNUP_LNAME_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_LNAME_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_LNAME_REQUIRED' />),
  mobile_number: Yup.string()
    .min(11, <FormattedMessage id='AUTH_SIGNUP_MOBILE_MIN' />)
    .max(11, <FormattedMessage id='AUTH_SIGNUP_MOBILE_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_MOBILE_REQUIRED' />),
  email: Yup.string()
    .email(<FormattedMessage id='AUTH_SIGNUP_EMAIL_FORMAT' />)
    .min(2, <FormattedMessage id='AUTH_SIGNUP_EMAIL_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_EMAIL_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_EMAIL_REQUIRED' />),
  password: Yup.string()
    .min(2, <FormattedMessage id='AUTH_SIGNUP_PASSWORD_MIN' />)
    .max(50, <FormattedMessage id='AUTH_SIGNUP_PASSWORD_MAX' />)
    .required(<FormattedMessage id='AUTH_SIGNUP_PASSWORD_REQUIRED' />),
  password_confirmation: Yup.string()
    .required(<FormattedMessage id='AUTH_SIGNUP_PASSWORD_CONFIRM' />)
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        <FormattedMessage id='AUTH_SIGNUP_PASSWORD_MATCH' />
      ),
    }),
  acceptTerms: Yup.bool().required(<FormattedMessage id='AUTH_SIGNUP_TERMS_ACCEPT' />),
});

export default function UserSignupPage() {
  // const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const router = useHistory();

  const {
    loading,
    emailCanRegister,
    registerStep,
    registerComplite,
    registerToken,
    mobileConfirmSucMSG,
  } = useSelector(
    ({ auth }) => ({
      registerSucMSGData: auth.register.registerSucMSG,
      registerErrMSGData: auth.register.registerErrMSG,
      loading: auth.register.resiterLoading,
      emailCanRegister: auth.register.emailCanRegister,
      registerStep: auth.register.registerStep,
      mobileConfirmSucMSG: auth.register.mobileConfirmSucMSG,
      registerComplite: auth.register.registerComplite,
      registerToken: auth.register.registerToken,
    }),
    shallowEqual
  );

  useEffect(() => {
    // If Email Can Register Enable Next Step
    if (emailCanRegister === true) {
      dispatch({ type: 'HANDEL_REGISTER_STEP', payload: 1 });
    }
    // If Register Complite
    if (mobileConfirmSucMSG === true) {
      dispatch({ type: 'HANDEL_REGISTER_STEP', payload: 4 });

      // Dispatch after 3 second
      setTimeout(() => {
        // After Complite Register User Redirect to Dashboard
        dispatch({ type: 'SET_TOKEN_TO_STORAGE', payload: registerToken });
      }, 3000);
    }
  }, [emailCanRegister, mobileConfirmSucMSG]);

  return (
    <>
      <div
        style={{ direction: 'rtl' }}
        className='flex flex-col justify-center p-2 mx-auto w-full md:w-2/3'
      >
        <div className='w-full  md:shadow-sm mb-3 md:border rounded-lg h-auto  '>
          {loading && <LinearProgress className='w-full rounded-lg ' />}
          <div className='flex  justify-around items-center p-5 '>
            <div>
              {registerComplite === false && (
                <>
                  <h2 className='text-center md:text-right font-bold text-lg text-slate-700 my-5'>
                    <FormattedMessage id='AUTH_SIGNUP_HEADING' />
                  </h2>

                  <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan'>
                    <FormattedMessage id='AUTH_SIGNUP_DESC' />
                  </h5>
                </>
              )}
              {/* Begin Stepper */}
              <Stepper activeStep={registerStep} orientation='vertical'>
                {/* Begin Email Step */}
                <Step key={0}>
                  <StepLabel>
                    <h2>
                      <FormattedMessage id='AUTH_SIGNUP_STEP_0' />
                    </h2>
                  </StepLabel>
                  <StepContent>
                    <EmailLoockupPage />
                  </StepContent>
                </Step>
                {/* End Email Step */}

                {/* Begin Step Passwors */}
                <Step key={1}>
                  <StepLabel>
                    <h2>
                      <FormattedMessage id='AUTH_SIGNUP_STEP_1' />
                    </h2>
                  </StepLabel>
                  <StepContent>
                    <EnterEmailPasswordPage />
                  </StepContent>
                </Step>
                {/* End Step Passwors */}
                {/* Begin Step Mobile Number */}
                <Step key={2}>
                  <StepLabel>
                    <h2>
                      <FormattedMessage id='AUTH_SIGNUP_STEP_2' />
                    </h2>
                  </StepLabel>
                  <StepContent>
                    <EnterPhoneNumberPage />
                  </StepContent>
                </Step>
                {/* End Step Mobile Number */}
                {/* Begin Step Confirm Mobile Number Code */}
                <Step key={3}>
                  <StepLabel>
                    <h2>
                      <FormattedMessage id='AUTH_SIGNUP_STEP_3' />
                    </h2>
                  </StepLabel>
                  <StepContent>
                    <ConfirmMobilePage />
                  </StepContent>
                </Step>
                {/* End Step Confirm Mobile Number Code */}
                {/* Begin Step Register Complite */}
                <Step key={4}>
                  <StepLabel>
                    <h2>
                      <FormattedMessage id='AUTH_SIGNUP_STEP_4' />
                    </h2>
                  </StepLabel>
                  <StepContent>
                    <h2 className='text-success text-lg font-iranyekan font-bold my-5 text-center'>
                      <FormattedMessage id='AUTH_SIGNUP_COMPLITE' />
                    </h2>
                  </StepContent>
                </Step>
                {/* End Step Register Complite */}
              </Stepper>
              {/* End Stepper */}
            </div>

            {/* Begin Aside image */}
            <div className='hidden md:flex flex-col justif-center items-center p-10'>
              {registerStep > 3 ? (
                <SVG className='w-2/3' src={personalIMG} />
              ) : (
                <SVG className='w-2/3' src={accIMG} />
              )}
              <h6 className='text-md font-yekan  text-slate-500 text-center leading-[30px] my-5'>
                <FormattedMessage id='AUTH_SIGNUP_ASIDE_TEXT' />
              </h6>
            </div>
            {/* End Aside image */}
          </div>
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
