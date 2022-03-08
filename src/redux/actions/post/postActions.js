import axios from 'axios'

import Crud from '../../cruds'

/* ------------------------- Get all posts ------------------------ */
export const fetchAllPosts = () => (dispatch) => {
  axios
    .get(Crud.getAllPostsURL)
    .then((res) => {
      dispatch({
        type: 'POSTS_LOADED',
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'POSTS_LOAD_ERR',
        payload: err.data,
      })
    })
}

/* ------------------------- Get Post By Id ------------------------ */
export const getPostByIdAction =
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

    const body = {
      id,
    }
    axios
      .post(Crud.getPostByIdURL, body, config)
      .then((res) => {
        dispatch({
          type: 'POST_BYID_LOADED',
          payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: 'POST_BYID_ERR',
          payload: err.data,
        })
      })
  }

/* ------------------------------- Create Post ------------------------------ */

export const createPost =
  ({
    category_id,
    publish_id,
    post_name,
    active,
    comment_status,
    slug,
    post_content,
    post_featured_image,
    post_password,
    search_engine_flow,
    search_engine_index,
    canonical_link,
    meta_title,
    meta_description,
    meta_tags,
    og_locale,
    og_title,
    og_description,
    og_url,
    og_site_name,
    og_image,
  }) =>
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

    const body = {
      category_id,
      publish_id,
      post_name,
      active,
      comment_status,
      slug,
      post_content,
      post_featured_image,
      post_password,
      search_engine_flow,
      search_engine_index,
      canonical_link,
      meta_title,
      meta_description,
      meta_tags,
      og_locale,
      og_title,
      og_description,
      og_url,
      og_site_name,
      og_image,
    }

    axios
      .post(Crud.createPostURL, body, config)
      .then((res) => {
        dispatch({
          type: 'CREATE_POST_SECCESS',
          payload: res.data,
        })
        setTimeout(() => {
          dispatch(undoSuccMsg())
        }, 7000)
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_POST_FAIL',
          payload: err.data,
        })
      })
  }

/* ------------------------------- Update Post ------------------------------ */

export const editPostAction =
  ({
    id,
    category_id,
    publish_id,
    post_name,
    active,
    comment_status,
    slug,
    post_content,
    post_featured_image,
    post_password,
    search_engine_flow,
    search_engine_index,
    canonical_link,
    meta_title,
    meta_description,
    meta_tags,
    og_locale,
    og_title,
    og_description,
    og_url,
    og_site_name,
    og_image,
  }) =>
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

    const body = {
      id,
      category_id,
      publish_id,
      post_name,
      active,
      comment_status,
      slug,
      post_content,
      post_featured_image,
      post_password,
      search_engine_flow,
      search_engine_index,
      canonical_link,
      meta_title,
      meta_description,
      meta_tags,
      og_locale,
      og_title,
      og_description,
      og_url,
      og_site_name,
      og_image,
    }

    axios
      .put(`${Crud.updatePostURL}/${id}`, body, config)
      .then((res) => {
        dispatch({
          type: 'UPDATE_POST_SECCESS',
          payload: res.data,
        })
        console.log('ok')
        setTimeout(() => {
          dispatch(undoUpdateSuccMsg())
        }, 7000)
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: 'UPDATE_POST_FAIL',
          payload: err.data,
        })
      })
  }

/* --------------------------- Delete Post Action --------------------------- */
export const deletePostAction =
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

    const body = {
      id,
    }

    axios
      .delete(`${Crud.deletePostURL}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'DELETE_POST_SECCESS',
          payload: res.data,
        })

        setTimeout(() => {
          dispatch(undoDeleteSuccMsg())
        }, 7000)
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: 'DELETE_POST_FAIL',
          payload: err.data,
        })
      })
  }

/* ----------------------- undo post Create succ msg ---------------------- */

export const undoSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'POST_CREATE_SUCCESS_UNDO',
  })
}

/* ----------------------- undo post Update succ msg ---------------------- */

export const undoUpdateSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'UPDATE_POST_SUCCESS_UNDO',
  })
}

/* ----------------------- undo post Delete succ msg ---------------------- */

export const undoDeleteSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'DELETE_POST_SUCCESS_UNDO',
  })
}

/* ------------------------- Post Info Handle Change ------------------------ */

export const storePostInfoData = (data) => (dispatch) => {
  dispatch({
    type: 'STORE_POST_INFO',
    payload: data,
  })
}

export const updatePostInfoData = (data) => (dispatch) => {
  dispatch({
    type: 'UPDATE_POST_INFO',
    payload: data,
  })
}

/* ------------------------- Post Image Handle Change ------------------------ */
export const storePostImgData = (data) => (dispatch) => {
  dispatch({
    type: 'STORE_POST_IMAGE',
    payload: data,
  })
}

/* ------------------------- Post Content Seo Handle Change ------------------------ */
export const storePostContentSeoData = (data) => (dispatch) => {
  dispatch({
    type: 'STORE_POST_CONTENT_SEO',
    payload: data,
  })
}

/* ------------------------- Post Social Seo Handle Change ------------------------ */
export const storePostSocialSeoData = (data) => (dispatch) => {
  dispatch({
    type: 'STORE_POST_SOCIAL_SEO',
    payload: data,
  })
}
/* ------------------------- Post Social OG Seo Handle Change ------------------------ */
export const storePostSocialOgSeoData = (data) => (dispatch) => {
  dispatch({
    type: 'STORE_POST_SOCIAL_OG_SEO',
    payload: data,
  })
}

/* ------------------------- Post Advance Seo Handle Change ------------------------ */
export const storePostAdvanceSeoData = (data) => (dispatch) => {
  dispatch({
    type: 'STORE_POST_ADVANCE_SEO',
    payload: data,
  })
}
