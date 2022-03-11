import axios from 'axios';
import crud from 'cruds';

export const accountLoockupAction =
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
      .post(crud.accountLoockupURL, body, config)
      .then((res) => {
        if (res.data.message === 'user has exist') {
          dispatch({
            type: 'USER_HAS_EXIST',
            payload: res.data,
          });

          setTimeout(() => {
            dispatch(undoCheckResponse());
          }, 3000);
        }
        if (res.data.message === "couldn't find user account") {
          dispatch({
            type: 'USER_DONT_EXIST',
            payload: res.data,
          });
          setTimeout(() => {
            dispatch(undoCheckResponse());
          }, 3000);
        }
      })
      .catch((err) => {
        dispatch({
          type: 'USER_LOOCKUP_ERR',
        });
      });
  };

export const undoCheckResponse = () => (dispatch) => {
  dispatch({
    type: 'USER_CHECK_EXIST_UNDO',
  });
};

/* ------------------------------- User Login ------------------------------- */
export const loginAction =
  ({ email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = { email, password };

    axios
      .post(crud.loginUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res.data,
        });
        // After success login user most be loaded
        // dispatch(loadUser());
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_ERR',
        });
        setTimeout(() => {
          dispatch(undoLoginErr());
        }, 3000);
      });
  };

export const undoLoginErr = () => (dispatch) => {
  dispatch({
    type: 'LOGIN_ERR_MSG_UNDO',
  });
};
