import axios from 'axios'

import Crud from '../../cruds'

/* ------------------------------- Check user Register ------------------------------- */

export const checkRegister =
  ({mobile_number}) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // Request body
    const body = {
      mobile_number,
    }

    console.log(body)

    axios
      .post(Crud.checkUserRegisterUrl, body, config)
      .then((res) => {
        if (res.data.message === 'user has registered') {
          dispatch({
            type: 'USER_IS_REGISTRED',
            payload: res.data,
          })
        } else {
          dispatch({
            type: 'USER_NOT_REGISTRED',
            payload: res.data,
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: 'USER_REGISTRED_ERR',
          payload: err.data,
        })
      })
  }

/* ------------------------------- OTP Action ------------------------------- */

export const otpAction =
  ({mobile_number, first_name, last_name}) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // Request body
    const body = {
      mobile_number,
      first_name,
      last_name,
    }

    console.log(body)

    axios
      .post(Crud.otpUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'OTP_SEND_SECCESS',
          payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: 'OTP_SEND_ERR',
          payload: err.data,
        })
      })
  }

/* ------------------------------- Verify OTP Code ------------------------------- */

export const verifyOtpCode =
  ({mobile_token}) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // Request body
    const body = {
      mobile_token,
    }

    axios
      .post(Crud.verifyOtpUrl, body, config)
      .then((res) => {
        dispatch({
          type: 'OTP_VERIFY_SECCESS',
          payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: 'OTP_VERIFY_ERR',
          payload: err.data,
        })
      })
  }
