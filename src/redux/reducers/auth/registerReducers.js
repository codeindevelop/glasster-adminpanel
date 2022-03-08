const initialState = {
  registerSucMSG: null,
  registerErrMSG: null,

  userAccountActiveMSG: null,
  userAccountActiveERR: null,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registerSucMSG: true,
        registerErrMSG: null,
      };
    case 'REGISTER_ERR':
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
