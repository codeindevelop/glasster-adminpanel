import axios from 'axios';
import Crud from '../../cruds';
/* ------------------------- Get all Post Statuses ------------------------ */
export const fetchPublishStatus = () => (dispatch) => {
  const token = localStorage.getItem('token');
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(Crud.getAllPostStatus, config)
    .then((res) => {
      dispatch({
        type: 'LOAD_POSTSTATUS_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'LOAD_POSTSTATUS_FAIL',
        payload: err.data,
      });
    });
};
