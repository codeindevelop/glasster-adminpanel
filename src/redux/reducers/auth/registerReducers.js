import { SignalWifiStatusbarNull } from '@mui/icons-material';

const initialState = {
  tempRegisterFirstName: '',
  tempRegisterLastName: '',
  tempRegisterEmail: '',
  tempRegisterMobile: '',
  emailExistERR: null,
  emailCanRegister: null,
  resiterLoading: null,
  registerStep: 0,
  registerToken: '',
  helpRegisterMobileModal: false,
  termsModal: false,
  registerMobileSucMSG: null,
  registerMobileExisMSG: null,
  mobileConfirmSucMSG: null,
  mobileConfirmErrMSG: null,
  registerComplite: false,
  getOtpCodeAgain: false,

  registerSucMSG: null,
  registerErrMSG: null,
  userAccountActiveMSG: null,
  userAccountActiveERR: null,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN_TO_STORAGE':
      localStorage.setItem('token', action.payload);
      window.location.reload(true);
      return {
        ...state,
      };
    case 'GET_REGISTER_OTP_CODE_SUC':
      return {
        ...state,
        getOtpCodeAgain: true,
      };
    case 'GET_REGISTER_OTP_CODE_SUC_UNDO':
      return {
        ...state,
        getOtpCodeAgain: null,
      };
    case 'MOBILE_CONFIRMED_SUC':
      return {
        ...state,
        mobileConfirmSucMSG: true,
        registerComplite: true,
        emailCanRegister: null,
      };
    case 'MOBILE_CONFIRMED_ERR':
      return {
        ...state,
        mobileConfirmErrMSG: true,
      };
    case 'MOBILE_CONFIRMED_ERR_UNDO':
      return {
        ...state,
        mobileConfirmErrMSG: null,
      };
    case 'MOBILE_CONFIRMED_SUC_UNDO':
      return {
        ...state,
        mobileConfirmSucMSG: null,
      };
    case 'REGISTER_MOBILE_SUC':
      return {
        ...state,
        registerMobileSucMSG: true,
        tempRegisterMobile: action.payload,
      };
    case 'REGISTER_MOBILE_EXIST':
      return {
        ...state,
        registerMobileExisMSG: true,
      };
    case 'REGISTER_MOBILE_EXIST_UNDO':
      return {
        ...state,
        registerMobileExisMSG: null,
      };
    case 'REGISTER_MOBILE_SUC_UNDO':
      return {
        ...state,
        registerMobileSucMSG: null,
      };
    case 'SIGNUP_LOADING':
      return {
        ...state,
        resiterLoading: action.payload,
      };
    case 'EMAIL_HAS_EXIST':
      return {
        ...state,
        emailExistERR: true,
        resiterLoading: null,
        tempRegisterFirstName: action.payload.first_name,
        tempRegisterLastName: action.payload.last_name,
        tempRegisterEmail: action.payload.email,
      };
    case 'EMAIL_HAS_EXIST_UNDO':
      return {
        ...state,
        emailExistERR: null,
      };
    case 'EMAIL_CAN_REGISTER':
      return {
        ...state,
        emailExistERR: null,
        emailCanRegister: true,
        resiterLoading: null,
        tempRegisterFirstName: action.payload.first_name,
        tempRegisterLastName: action.payload.last_name,
        tempRegisterEmail: action.payload.email,
      };
    case 'HANDEL_REGISTER_STEP':
      return {
        ...state,
        registerStep: action.payload,
      };
    case 'HELP_REGISTER_MOBILE_MODAL':
      return {
        ...state,
        helpRegisterMobileModal: action.payload,
      };
    case 'TERMS_MODAL':
      return {
        ...state,
        termsModal: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registerToken: action.payload.accessToken,
        registerSucMSG: true,
        registerErrMSG: null,
      };
    case 'REGISTER_SUCCESS_UNDO':
      return {
        ...state,
        registerSucMSG: null,
      };
    case 'PASSWORD_REGISTER_STEP_ERR':
      return {
        ...state,
        registerErrMSG: true,
      };

    case 'USER_ACCOUNT_ACTIVE_SUC':
      return {
        ...state,
        userAccountActiveMSG: true,
      };

    case 'USER_ACCOUNT_ACTIVE_ERR':
      return {
        ...state,
        userAccountActiveERR: true,
      };

    default:
      return state;
  }
};
