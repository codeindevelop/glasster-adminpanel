import axios from "axios";

import authCrud from "../../cruds";

/* ------------------------------- Get Qr Code ------------------------------- */

export const getQrCodeAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem("token");
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(authCrud.getQrCodeUrl, config)
    .then((res) => {
      dispatch({
        type: "GET_2FA_QR_SUCC",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_2FA_QR_ERR",
        payload: err.data,
      });
    });
};

/* ------------------------------- Confirm Qr Code ------------------------------- */

export const confirmQrCodeAction =
  ({ twofa_code }) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem("token");
    // Headers
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      twofa_code,
    };

    axios
      .post(authCrud.confirmQrCodeUrl, body, config)
      .then((res) => {
        if (
          res.data.message === "twofa authentiacator is Enabled Successful!"
        ) {
          dispatch({
            type: "CONFIRM_2FA_QR_SUCC",
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        if (err.response.data.message === "code invalid") {
          dispatch({
            type: "CONFIRM_2FA_QR_ERR",
          });
        }
      });
  };

/* ------------------------------- Get Qr Code Status ------------------------------- */

export const statusQrCodeAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem("token");
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(authCrud.getStatusQrCodeUrl, config)
    .then((res) => {
      if (res.data.message === "Two Factor Enable!") {
        dispatch({
          type: "STATUS_2FA_ENABLED",
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: "STATUS_2FA_DISABLED",
      });
    });
};

/* ------------------------------- Disable Qr Code ------------------------------- */

export const disableQrCodeAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem("token");
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {};

  axios
    .post(authCrud.disableQrCodeUrl, body, config)
    .then((res) => {
      dispatch({
        type: "2FA_HAS_BEN_DISABLED",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "2FA_HAS_BEN_DISABLED_ERR",
      });
    });
};
