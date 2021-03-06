const ISSERVER = typeof window === 'undefined';

const initialState = {
  token: !ISSERVER ? localStorage.getItem('token') : null,
  authErrModal: false,
  userExistCheck: null,
  tempLoginEmail: '', // email after check user loockup
  isAuthenticated: false,
  isLoginErr: null,
  isLoginSucc: null,
  isLogOut: null,
  loginWithTwofa: false,
  twoFaCodeErr: false,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_HAS_EXIST': // if user has ben exist
      return {
        ...state,
        userExistCheck: true,
        tempLoginEmail: action.payload.email,
      };
    case 'USER_DONT_EXIST': // if user has not exist
      return {
        ...state,
        userExistCheck: false,
      };
    case 'USER_CHECK_EXIST_UNDO':
      return {
        ...state,
        userExistCheck: null,
      };
    case 'LOGIN_SUCCESS':
      if (!ISSERVER) {
        localStorage.setItem('token', action.payload.access_token);
      }
      return {
        ...state,
        isAuthenticated: true,
        isLoginSucc: true,
        isLoginErr: null,
      };
    case 'LOGIN_ERR':
      return {
        ...state,
        isLoginErr: true,
      };
    case 'LOGIN_ERR_MSG_UNDO':
      return {
        ...state,
        isLoginErr: null,
      };
    case 'LOGOUT_SUCCESS':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLogOut: true,
      };
    default:
      return state;
  }
};
