const initialState = {
  token: localStorage.getItem('token'),
  checkUserRegistred: null,
  tempMobileNumber: 0,
  otpSendSuccMSG: false,
  otpSendErrMSG: false,

  isAuthenticated: null,
  isLoginErr: null,
  isLoading: false,
  isLoginSucc: null,
  isLogOut: null,

  otpVerifyErrMSG: null,

  updateDocSucMSG: null,
  updateDocErrMSG: null,

  pageAfterLoginMsg_suc: null,
  pageAfterLoginMsg_fail: null,
  registerSucMSG: null,
  registerErrMSG: null,
  mobileTokenVerified: null,
  userAccountActiveMSG: null,
  userAccountActiveERR: null,
}

export const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_IS_REGISTRED':
      return {
        ...state,
        checkUserRegistred: true,
        tempMobileNumber: action.payload.mobile_number,
      }
    case 'USER_NOT_REGISTRED':
      return {
        ...state,
        checkUserRegistred: false,
        tempMobileNumber: action.payload.mobile_number,
      }

    case 'OTP_SEND_SECCESS':
      return {
        ...state,
        checkUserRegistred: false,
        otpSendErrMSG: null,
        otpSendSuccMSG: true,
      }
    case 'OTP_SEND_ERR':
      return {
        ...state,
        otpSendErrMSG: true,
      }

    case 'OTP_VERIFY_SECCESS':
      localStorage.setItem('token', action.payload.access_token)

      return {
        ...state,
        isAuthenticated: true,
        isLoginSucc: true,
        isLoading: false,
        isLoginErr: null,
        otpVerifyErrMSG: null,
      }
    case 'OTP_VERIFY_ERR':
      return {
        ...state,
        otpVerifyErrMSG: true,
      }
    case 'UPDATE_DOC_SUCCESS':
      return {
        ...state,
        updateDocSucMSG: true,
        updateDocErrMSG: null,
      }
    case 'UPDATE_DOC_ERR':
      return {
        ...state,
        updateDocErrMSG: true,
      }
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true,
      }
    case 'AUTH_ERROR':
      return {
        ...state,
        authErrModal: true,
      }

    case 'AUTH_SERVER_HAS_SUCC':
      return {
        ...state,
        authErrModal: false,
      }
    case 'AUTH_SERVER_HAS_ERR':
      return {
        ...state,
        authErrModal: true,
      }
    case 'LOGIN_ERR_MSG_UNDO':
      return {
        ...state,
        isLoginErr: null,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoginErr: true,
      }
    case 'LOGOUT_SUCCESS':
      localStorage.removeItem('token')

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLoading: false,
        isLogOut: true,
      }
    case 'LOGOUT_FAIL':
      localStorage.removeItem('token')

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLoading: false,
        isLogOut: true,
      }
    default:
      return state
  }
}
