import axios from 'axios';
import crud from 'cruds';

export const emailLoockupAction =
  ({ email, first_name, last_name }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Start Loading Bar in signup page
    dispatch({ type: 'SIGNUP_LOADING', payload: true });

    // Request body
    const body = {
      first_name,
      last_name,
      email,
    };

    axios
      .post(crud.emailLoockupURL, body, config)
      .then((res) => {
        if (res.data.message === 'email has exist') {
          dispatch({
            type: 'EMAIL_HAS_EXIST',
            payload: body,
          });

          setTimeout(() => {
            dispatch(undoCheckEmailResponse());
          }, 3000);

          // Disable Loading Bar in Signup Page
          dispatch({ type: 'SIGNUP_LOADING', payload: false });
        }
        if (res.data.message === 'Email Can register') {
          dispatch({
            type: 'EMAIL_CAN_REGISTER',
            payload: body,
          });
          setTimeout(() => {
            dispatch(undoCheckEmailResponse());
          }, 3000);
          // Disable Loading Bar in Signup Page
          dispatch({ type: 'SIGNUP_LOADING', payload: false });
        }
      })
      .catch((err) => {
        // Disable Loading Bar in Signup Page
        dispatch({ type: 'SIGNUP_LOADING', payload: false });
        dispatch({
          type: 'EMAIL_LOOCKUP_ERR',
        });
      });
  };

export const undoCheckEmailResponse = () => (dispatch) => {
  dispatch({
    type: 'EMAIL_HAS_EXIST_UNDO',
  });
};

/* ---------------------- Register Step Password Action --------------------- */

export const registerPasswordAction =
  ({ first_name, last_name, email, password, password_confirmation }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Start Loading Bar in signup page
    dispatch({ type: 'SIGNUP_LOADING', payload: true });

    // Request body
    const body = {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    };

    axios
      .post(crud.registerUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: res.data,
        });
        dispatch({ type: 'SIGNUP_LOADING', payload: false });
        // Undo Register Sucess MSG
        setTimeout(() => {
          dispatch(undoRegisterSuccessMSG());
        }, 3000);
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_LOADING', payload: false });
        dispatch({
          type: 'PASSWORD_REGISTER_STEP_ERR',
        });
      });
  };

export const undoRegisterSuccessMSG = () => (dispatch) => {
  dispatch({
    type: 'REGISTER_SUCCESS_UNDO',
  });
};

/* ---------------------- Register Mobile After Register Action --------------------- */

export const registerMobileAction =
  ({ mobile_number, accessToken }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    // Start Loading Bar in signup page
    dispatch({ type: 'SIGNUP_LOADING', payload: true });

    // Request body
    const body = {
      mobile_number,
    };

    axios
      .post(crud.registerMobileURL, body, config)
      .then((res) => {
        // If Mobile Number has Exist Dispatch Err
        if (res.data.message === 'The mobile number has already been taken.') {
          dispatch({
            type: 'REGISTER_MOBILE_EXIST',
          });
          // Undo Exist Err MSG
          setTimeout(() => {
            dispatch(undoRegisterMobileExisMSG());
          }, 3000);

          // Disable Loading Bar in Signup Page
          dispatch({ type: 'SIGNUP_LOADING', payload: false });
        }
        // If Mobile Not Exist Code Has Ben Send To User
        if (res.data.message === 'code has ben send to user') {
          dispatch({
            type: 'REGISTER_MOBILE_SUC',
            payload: mobile_number,
          });

          // Disable Loading Bar in Signup Page
          dispatch({ type: 'SIGNUP_LOADING', payload: false });
          // Undo Register Sucess MSG
          setTimeout(() => {
            dispatch(undoRegisterMobileSuccessMSG());
          }, 3000);
        }
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_LOADING', payload: false });
      });
  };

export const undoRegisterMobileSuccessMSG = () => (dispatch) => {
  dispatch({
    type: 'REGISTER_MOBILE_SUC_UNDO',
  });
};

export const undoRegisterMobileExisMSG = () => (dispatch) => {
  dispatch({
    type: 'REGISTER_MOBILE_EXIST_UNDO',
  });
};

/* ---------------------- Confirm OTP code after Regitser Action --------------------- */

export const confirmMobileCodeAction =
  ({ confirm_code, accessToken }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    // Start Loading Bar in signup page
    dispatch({ type: 'SIGNUP_LOADING', payload: true });

    // Request body
    const body = {
      confirm_code,
    };

    axios
      .post(crud.confirmMobileCodeURL, body, config)
      .then((res) => {
        dispatch({
          type: 'MOBILE_CONFIRMED_SUC',
          payload: res.data,
        });
        dispatch({ type: 'SIGNUP_LOADING', payload: false });
        // Undo Sucess MSG
        setTimeout(() => {
          dispatch(undoMobileConfirmedMSG());
        }, 3000);
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_LOADING', payload: false });

        dispatch({
          type: 'MOBILE_CONFIRMED_ERR',
        });
        // Undo Sucess MSG
        setTimeout(() => {
          dispatch(undoMobileConfirmedERRUndo());
        }, 5000);
      });
  };

export const undoMobileConfirmedMSG = () => (dispatch) => {
  dispatch({
    type: 'MOBILE_CONFIRMED_SUC_UNDO',
  });
};
export const undoMobileConfirmedERRUndo = () => (dispatch) => {
  dispatch({
    type: 'MOBILE_CONFIRMED_ERR_UNDO',
  });
};

/* ---------------------- Get Another OTP Code if code is not recived to user --------------------- */

export const getMobileCodeAction =
  ({ tempRegisterMobile, accessToken }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    // Start Loading Bar in signup page
    dispatch({ type: 'SIGNUP_LOADING', payload: true });

    // Request body
    const body = {
      mobile_number: tempRegisterMobile,
    };

    axios
      .post(crud.getMobileCodeURL, body, config)
      .then((res) => {
        dispatch({
          type: 'GET_REGISTER_OTP_CODE_SUC',
          payload: res.data,
        });
        dispatch({ type: 'SIGNUP_LOADING', payload: false });
        setTimeout(() => {
          dispatch(undoGetOTPCodeSucc());
        }, 3000);
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_LOADING', payload: false });

        dispatch({
          type: 'GET_REGISTER_OTP_CODE_ERR',
        });
      });
  };

export const undoGetOTPCodeSucc = () => (dispatch) => {
  dispatch({
    type: 'GET_REGISTER_OTP_CODE_SUC_UNDO',
  });
};
