import axios from 'axios';
import Crud from '../../cruds';

/* ------------------------- Check Token & load user ------------------------ */
export const loadUser = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token');

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(Crud.profileUrl, config)
    .then((res) => {
      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.data,
      });
    });
};

/* ------------------------------- Logout User ------------------------------ */

export const logoutAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token');

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(Crud.logoutUrl, '', config)
    .then((res) => {
      dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    })
    .catch((err) => {
      dispatch({
        type: 'LOGOUT_FAIL',
      });
    });
};
