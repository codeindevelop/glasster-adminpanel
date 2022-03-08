import axios from 'axios';

import Crud from '../../cruds';

/* ------------------------------- Check user Register ------------------------------- */

export const getAuthSettingAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(Crud.getAuthSettingsURL, config)
    .then((res) => {
      if (res.data.setting[0].register_type === 'otp-mobile') {
        dispatch({
          type: 'CHANGE_REGISTER_MOBILE_OTP',
        });
      }
      if (res.data.setting[0].register_type === 'email') {
        dispatch({
          type: 'CHANGE_REGISTER_EMAIL',
        });
      }
      if (res.data.setting[0].register_type === 'full') {
        dispatch({
          type: 'CHANGE_REGISTER_FULL',
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'GET_AUTHSETTINGS_ERR',
        payload: err.data,
      });
    });
};

/* ------------------------------- get user settings page Count Datas for header ------------------------------- */

export const getUserSettingCountAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(Crud.userSettingsPageCountURL, config)
    .then((res) => {
      dispatch({
        type: 'GET_USER_HEADER_SUC',
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'GET_USER_HEADER_ERR',
        payload: err.data,
      });
    });
};

/* ------------------------------- get All Users ------------------------------- */

export const getAllUsers = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(Crud.getAllUsersURL, config)
    .then((res) => {
      dispatch({
        type: 'GET_ALL_USERS_SUC',
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'GET_ALL_USERS_ERR',
        payload: err.data,
      });
    });
};

/* ------------------------------- Delete User By admin Action ------------------------------- */

export const deleteUserAction =
  ({ id }) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`${Crud.deleteUserUrl}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'DELETE_USER_SUC',
          payload: res.data,
        });

        //diapacht undo sucess message
        setTimeout(() => {
          dispatch(undoDeleteSuccMsg());
        }, 3000);
      })
      .catch((err) => {
        dispatch({
          type: 'DELETE_USER_ERR',
          payload: err.data,
        });
      });
  };

/* ----------------------- Undo DeleteUser MSG SUC ---------------------- */

export const undoDeleteSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'DELETE_USER_SUC_UNDO',
  });
};

/* ------------------------------- Create User By Admin ACtion ------------------------------- */

export const createUserAction =
  ({ first_name, last_name, mobile_number, email, password, password_confirmation, active }) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      first_name,
      last_name,
      mobile_number,
      email,
      password,
      password_confirmation,
      active,
    };

    axios
      .post(Crud.createUserUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'CREATE_USER_SUCC_MSG',
          payload: res.data,
        });

        //diapacht undo sucess message
        setTimeout(() => {
          dispatch(undoCreateUserSuccMsg());
        }, 3000);
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_USER_ERR_MSG',
          payload: err.data,
        });
      });
  };

/* ----------------------- Undo Create User MSG SUC ---------------------- */

export const undoCreateUserSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'CREATE_USER_SUCC_MSG_UNDO',
  });
};

/* ------------------------------- Edit User By Admin ACtion ------------------------------- */

export const editUserAction =
  ({ id, first_name, last_name, mobile_number, email, password, password_confirmation, active }) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      id,
      first_name,
      last_name,
      mobile_number,
      email,
      password,
      password_confirmation,
      active,
    };

    axios
      .put(`${Crud.editUserUrl}/${id}`, body, config)
      .then((res) => {
        dispatch({
          type: 'EDIT_USER_SUCC_MSG',
          payload: res.data,
        });

        //diapacht undo sucess message
        setTimeout(() => {
          dispatch(undoEditUserSuccMsg());
        }, 3000);
      })
      .catch((err) => {
        dispatch({
          type: 'EDIT_USER_ERR_MSG',
          payload: err.data,
        });
      });
  };

/* ----------------------- Undo Edit User MSG SUC ---------------------- */

export const undoEditUserSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'EDIT_USER_SUCC_MSG_UNDO',
  });
};

// Get User By Id
export const getUserByIdAction =
  ({ id }) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${Crud.getUserByIdUrl}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'GET_USER_BY_ID_SUCC',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'GET_USER_BY_ID_ERR',
          payload: err.data,
        });
      });
  };
