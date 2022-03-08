import axios from 'axios'
import crud from '../../cruds'

/* --------------------- Get All post Categories Action --------------------- */
export const getAllPostCategories = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  axios
    .get(crud.getAllPostCategoriesURL, config)
    .then((res) => {
      dispatch({
        type: 'GET_POST_CATEGORIES_SUC',
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'GET_POST_CATEGORIES_ERR',
        payload: err.data,
      })
    })
}

/* --------------------- Delete post Categories Action --------------------- */
export const deletePostCategoryAction =
  ({id}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    axios
      .delete(`${crud.deletePostCategoriesURL}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'DELETE_POST_CATEGORIES_SUC',
          payload: res.data,
        })
        // undo success msg afte 6 second
        setTimeout(() => {
          undoDeleteCategorySucMSG()
        }, 3000)
      })
      .catch((err) => {
        dispatch({
          type: 'DELETE_POST_CATEGORIES_ERR',
          payload: err.data,
        })
      })
  }

/* --------------------- Create post Categories Action --------------------- */
export const createPostCategoryAction =
  ({category_name, parent_id, category_link_slug, active}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const body = {
      category_name,
      parent_id,
      category_link_slug,
      active,
    }

    axios
      .post(crud.createPostCategoriesURL, body, config)
      .then((res) => {
        dispatch({
          type: 'CREATE_POST_CATEGORIES_SUC',
          payload: res.data,
        })
        dispatch({
          type: 'ADD_POST_CATEGORY_MODAL_HIDE',
          payload: res.data,
        })

        // undo success msg afte 6 second
        setTimeout(() => {
          dispatch(undoCreateCategorySUcMSG())
        }, 3000)
      })

      .catch((err) => {
        dispatch({
          type: 'CREATE_POST_CATEGORIES_ERR',
          payload: err.data,
        })
      })
  }

/* ----------------------- Undo PostCategory Delete success masage ----------------------- */
export const undoDeleteCategorySucMSG = () => (dispatch) => {
  dispatch({
    type: 'DELETE_POST_CATEGORIES_SUC_UNDO',
  })
}

/* ----------------------- Undo PostCategory Create success masage ----------------------- */
export const undoCreateCategorySUcMSG = () => (dispatch) => {
  dispatch({
    type: 'CREATE_POST_CATEGORIES_SUC_UNDO',
  })
}



/* ------------------------- Get Category By Id ------------------------ */
export const getPostCategoryByIdAction =
  ({id}) =>
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

 
    axios
      .get(`${crud.getPostCategoryByIdURL}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'CATEGORYPOST_BYID_LOADED',
          payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: 'CATEGORYPOST_BYID_ERR',
          payload: err.data,
        })
      })
  }

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
      .put(`${crud.updatePostCategoryByIdURL}/${id}`, body, config)
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
