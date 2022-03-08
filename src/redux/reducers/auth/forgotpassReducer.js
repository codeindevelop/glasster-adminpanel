const initialState = {
  fpStepOne: null,
  userDontExist: null,
  resetPassSuc: null,
  resetPassErr: null,
  changePassReqMsg: false,
};

export const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PASS_STEP_ONE_SUCCESS':
      return {
        ...state,
        changePassReqMsg: true,
      };

    case 'RESET_PASSWOR_STEP_ONE_SUCCESS':
      return {
        ...state,
        fpStepOne: true,
        userDontExist: null,
      };

    case 'RESET_PASSWOR_STEP_ONE_ERR':
      return {
        ...state,
        fpStepOne: false,
        userDontExist: null,
      };

    case 'USER_DONT_EXIST':
      return {
        ...state,
        userDontExist: true,
      };

    case 'RESET_PASSWOR_SUCCESS':
      return {
        ...state,
        resetPassSuc: true,
      };

    case 'RESET_PASSWOR_FAIL':
      return {
        ...state,
        resetPassErr: true,
      };

    default:
      return state;
  }
};
