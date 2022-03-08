import axios from 'axios';

import Crud from '../../cruds';

/* ------------------------------- Register User ------------------------------- */

export const registerAction =
  ({ first_name, last_name, mobile_number, email, password, password_confirmation }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = {
      first_name,
      last_name,
      mobile_number,
      email,
      password,
      password_confirmation,
      portal_id: 1,
    };

    console.log(body);

    axios
      .post(Crud.registerUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'REGISTER_ERR',
          payload: body,
        });
      });
  };

/* ------------------------------- Active User ------------------------------- */

export const activeUserAction =
  ({ token }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // // Request body
    // const body = {
    //   token,
    // };

    axios
      .get(`${Crud.registerActivationUrl}/${token}`, config)
      .then((res) => {
        dispatch({
          type: 'USER_ACCOUNT_ACTIVE_SUC',
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response.data.message === 'This activation token is invalid.') {
          dispatch({
            type: 'USER_ACCOUNT_ACTIVE_ERR',
            payload: err.data,
          });
        }

        console.log(err.response.data);
      });
  };
