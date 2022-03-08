import axios from 'axios'

import Crud from '../../cruds'

/* ------------------------- Upload File  ------------------------ */
export const uploadFileAction =
  ({file}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    }
    
    let formData = new FormData()
    formData.append('files[]', file)

    console.log(file)
    axios
      .post(Crud.uploadFileURL, formData, config)
      .then((res) => {
        dispatch({
          type: 'UPLOAD_FILE_SUCC',
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err.response)
        dispatch({
          type: 'UPLOAD_FILE_ERR',
          payload: err.data,
        })
      })
  }
