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
