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

export default function UserSignupPage() {
  // const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const router = useHistory();

  const { loading, emailCanRegister, registerStep, registerComplite, mobileConfirmSucMSG } =
    useSelector(
      ({ auth }) => ({
        registerSucMSGData: auth.register.registerSucMSG,
        registerErrMSGData: auth.register.registerErrMSG,
        loading: auth.register.resiterLoading,
        emailCanRegister: auth.register.emailCanRegister,
        registerStep: auth.register.registerStep,
        mobileConfirmSucMSG: auth.register.mobileConfirmSucMSG,
        registerComplite: auth.register.registerComplite,
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
    }
  }, [emailCanRegister, mobileConfirmSucMSG]);

  return (
    <>
      <div style={{ direction: 'rtl' }} className='flex justify-center p-1 w-full'>
        <div className='w-full md:w-2/3 md:shadow-sm mb-3 md:border rounded-lg h-auto  '>
          {loading && <LinearProgress className='w-full rounded-lg ' />}
          <div className='flex  justify-around items-center p-5 '>
            <div>
              {registerComplite === false && (
                <>
                  <h2 className='text-center md:text-right font-bold text-lg text-slate-700 my-5'>
                    ثبت نام در سامانه
                  </h2>

                  <h5 className='text-center text-xl leading-10 text-slate-600 font-yekan'>
                    جهت ثبت نام در سامانه لطفا اطلاعات کاربری خود را وارد نمایید
                  </h5>
                </>
              )}
              {/* Begin Stepper */}
              <Stepper activeStep={registerStep} orientation='vertical'>
                {/* Begin Email Step */}
                <Step key={0}>
                  <StepLabel>
                    <h2>اطلاعات هویتی</h2>
                  </StepLabel>
                  <StepContent>
                    <EmailLoockupPage />
                  </StepContent>
                </Step>
                {/* End Email Step */}

                {/* Begin Step Passwors */}
                <Step key={1}>
                  <StepLabel>
                    <h2>اطلاعات ورود</h2>
                  </StepLabel>
                  <StepContent>
                    <EnterEmailPasswordPage />
                  </StepContent>
                </Step>
                {/* End Step Passwors */}
                {/* Begin Step Mobile Number */}
                <Step key={2}>
                  <StepLabel>
                    <h2>اطلاعات ارتباطی</h2>
                  </StepLabel>
                  <StepContent>
                    <EnterPhoneNumberPage />
                  </StepContent>
                </Step>
                {/* End Step Mobile Number */}
                {/* Begin Step Confirm Mobile Number Code */}
                <Step key={3}>
                  <StepLabel>
                    <h2>تایید اطلاعات</h2>
                  </StepLabel>
                  <StepContent>
                    <ConfirmMobilePage />
                  </StepContent>
                </Step>
                {/* End Step Confirm Mobile Number Code */}
                {/* Begin Step Register Complite */}
                <Step key={4}>
                  <StepLabel>
                    <h2>پایان عملیات</h2>
                  </StepLabel>
                  <StepContent>
                    <h2 className='text-success text-lg font-iranyekan font-bold my-5 text-center'>
                      موبایل شما با موفقیت تایید گردید و پس از چند ثانیه به پنل کاربری منتقل می
                      گردید
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
              <h6 className='text-md font-pop  text-slate-500 text-center leading-[30px] my-5'>
                Bring your idea to life and get set up for success!
              </h6>
            </div>
            {/* End Aside image */}
          </div>
        </div>
      </div>
    </>
  );
}
