const initialState = {
  tempRegisterFirstName: '',
  tempRegisterLastName: '',
  tempRegisterEmail: '',
  emailExistERR: null,
  emailCanRegister: null,
  resiterLoading: null,
  registerStep: 0,
  registerToken: '',
  helpRegisterMobileModal: false,
  termsModal: false,

  registerSucMSG: null,
  registerErrMSG: null,
  userAccountActiveMSG: null,
  userAccountActiveERR: null,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
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
