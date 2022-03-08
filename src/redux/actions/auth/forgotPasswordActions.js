import axios from 'axios';
import crud from '../../cruds';

export const forgotPassStepOne =
  ({ email }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = {
      email,
    };

    axios
      .post(crud.requestPasswordUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'RESET_PASSWOR_STEP_ONE_SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response.message === 'We cant find a user with that e-mail address.') {
          dispatch({
            type: 'USER_DONT_EXIST',
          });
        }
        console.log(err);
      });
  };
/* -------------------------- Reset Password Step2 -------------------------- */
export const forgotPassStepTwo =
  ({ email, password, password_confirmation, token }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = {
      email,
      password,
      password_confirmation,
      token,
    };
    console.log(body);
    axios
      .post(crud.changePasswordUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'RESET_PASSWOR_SUCCESS',
          payload: res.data,
        });
        setTimeout(() => {
          dispatch({
            type: 'RESET_PASSWOR_SUCCESS_UNDO',
          });
        }, 3000);
      })
      .catch((err) => {
        dispatch({
          type: 'RESET_PASSWOR_FAIL',
        });

        console.log(err.response.data.message);
      });
  };

export const changePassStepOne =
  ({ email }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = {
      email,
    };

    axios
      .post(crud.requestPasswordUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'CHANGE_PASS_STEP_ONE_SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response.message === 'We cant find a user with that e-mail address.') {
          dispatch({
            type: 'USER_DONT_EXIST',
          });
        }
        console.log(err);
      });
  };
