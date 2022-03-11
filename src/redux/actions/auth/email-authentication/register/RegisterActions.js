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
