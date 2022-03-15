import axios from 'axios';
import crud from 'cruds';

export const getDashbaodrDataAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token');

  // Headers
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(crud.dashboardDataURL, config)
    .then((res) => {
      dispatch({ type: 'GET_DASHBOARD_DATA_SUC', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'GET_DASHBOARD_DATA_ERR', payload: err.data });
    });
};
