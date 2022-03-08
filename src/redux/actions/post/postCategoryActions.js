import axios from 'axios'
import Crud from '../../cruds'

/* ------------------------- Get all post categories ------------------------ */
export const fetchPostCategories = () => (dispatch) => {
  const token = localStorage.getItem('token')
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  axios
    .get(Crud.getPostCategoryURL, config)
    .then((res) => {
      dispatch({
        type: 'POST_CATEGORY_LOADED',
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'POST_CATEGORY_LOAD_ERR',
        payload: err.data,
      })
    })
}

// /* ------------------------- Get Category By Id ------------------------ */
// export const getPostCategoryByIdAction =
//   ({id}) =>
//   (dispatch) => {
//     // Get token from localstorage
//     const token = localStorage.getItem('token')

//     // Headers
//     const config = {
//       headers: {
//         'Content-type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }

//     axios
//       .post(`${Crud.getPostCategoryByIdURL}/${id}`, config)
//       .then((res) => {
//         dispatch({
//           type: 'CATEGORYPOST_BYID_LOADED',
//           payload: res.data,
//         })
//       })
//       .catch((err) => {
//         dispatch({
//           type: 'CATEGORYPOST_BYID_ERR',
//           payload: err.data,
//         })
//       })
//   }

export const showAddPostCategoryModal = () => (dispatch) => {
  dispatch({
    type: 'SHOW_ADD_POST_CATEGORY',
  })
}

export const hideAddPostCategoryModal = () => (dispatch) => {
  dispatch({
    type: 'HIDE_ADD_POST_CATEGORY',
  })
}

/* --------------------------- Create Post Category -------------------------- */

export const createPostCategory =
  ({categoryParent, category_name, category_link_slug, description, active}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // Request body
    const body = {
      categoryParent,
      category_name,
      category_link_slug,
      description,
      active,
    }

    axios
      .post(Crud.createPostCategory, body, config)
      .then((res) => {
        dispatch({
          type: 'POST_CATEGORY_CREATE_SUCCESS',
          payload: res.data,
        })
        setTimeout(() => {
          dispatch(undoSuccMsg())
        }, 3000)
      })
      .catch((err) => {
        dispatch({
          type: 'POST_CATEGORY_CREATE_FAIL',
          payload: err.data,
        })
      })
  }

/* -------------------------- Update Post Category -------------------------- */

export const updatePostCategory =
  ({id, categoryParent, category_name, category_link_slug, description, active}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // Request body
    const body = {
      id,
      categoryParent,
      category_name,
      category_link_slug,
      description,
      active,
    }

    axios
      .put(`${Crud.updatePostCategoryByIdURL}/${id}`, body, config)
      .then((res) => {
        dispatch({
          type: 'POST_CATEGORY_UPDATE_SUCCESS',
          payload: res.data,
        })
        setTimeout(() => {
          dispatch(undoUpdateSuccMsg())
        }, 3000)
      })
      .catch((err) => {
        dispatch({
          type: 'POST_CATEGORY_UPDATE_FAIL',
          payload: err.data,
        })
      })
  }

/* ----------------------- undo post category succ msg ---------------------- */

export const undoSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'POST_CATEGORY_CREATE_SUCCESS_UNDO',
  })
}

/* ----------------------- undo post category update succ msg ---------------------- */

export const undoUpdateSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'POST_CATEGORY_UPDATE_SUCCESS_UNDO',
  })
}
