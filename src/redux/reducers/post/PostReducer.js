const initialState = {
  posts: [],
  row_selected_id: 0,
  loaded_post_byid: [],
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  postForEdit: undefined,
  lastError: null,
  postInfoData: [
    // {
    //   category_id: '',
    //   post_status_id: '',
    //   post_name: '',
    //   slug: '',
    //   post_content: '',
    // },
  ],
  postUpdateData: [
    // {
    //   category_id: '',
    //   post_status_id: '',
    //   post_name: '',
    //   slug: '',
    //   post_content: '',
    // },
  ],

  postImageData: '',
  postSeoContentData: [],
  postSeoSocialData: [],
  postSeoAdvanceData: [],
  postSeoSocialOgData: [],
  postTableRowID: '',
  postDeleteDialog: null,
  postDeleteSuccMSG: null,
  postStoreSucc: null,
  postUpdateSucc: null,
  postUpdateErr: null,
  postStoreErr: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_ROW_ID':
      return {
        ...state,
        row_selected_id: action.payload,
      }
    case 'DELETE_DIALOG_SHOW':
      return {
        ...state,
        postDeleteDialog: true,
      }
    case 'POST_BYID_LOADED':
      return {
        ...state,
        loaded_post_byid: action.payload.post[0],
      }
    case 'UPDATE_POST_SECCESS':
      return {
        ...state,
        postUpdateSucc: true,
        postUpdateErr: null,
      }

    case 'UPDATE_POST_ERR':
      return {
        ...state,
        postUpdateErr: true,
      }

    case 'POSTS_LOADED':
      return {
        ...state,
        posts: action.payload.posts,
        totalCount: action.payload.totalCount,
      }
    case 'CREATE_POST_SECCESS':
      return {
        ...state,
        postStoreSucc: true,
        postStoreErr: null,
      }
    case 'POST_CREATE_SUCCESS_UNDO':
      return {
        ...state,
        postStoreSucc: null,
      }
    case 'UPDATE_POST_SUCCESS_UNDO':
      return {
        ...state,
        postUpdateSucc: null,
      }

    case 'DELETE_POST_SECCESS':
      return {
        ...state,
        postDeleteSuccMSG: true,
        postDeleteDialog: null,
      }
    case 'DELETE_POST_SUCCESS_UNDO':
      return {
        ...state,
        postDeleteSuccMSG: false,
      }
    case 'CREATE_POST_FAIL':
      return {
        ...state,
        postStoreErr: true,
      }
    case 'GET_POST_TABLE_ROW_ID':
      return {
        ...state,
        postTableRowID: action.payload,
      }
    case 'STORE_POST_INFO':
      return {
        ...state,
        postInfoData: action.payload,
      }
    case 'UPDATE_POST_INFO':
      return {
        ...state,
        postUpdateData: action.payload,
      }
    case 'STORE_POST_IMAGE':
      return {
        ...state,
        postImageData: action.payload,
      }
    case 'STORE_POST_CONTENT_SEO':
      return {
        ...state,
        postSeoContentData: action.payload,
      }
    case 'STORE_POST_SOCIAL_SEO':
      return {
        ...state,
        postSeoSocialData: action.payload,
      }
    case 'STORE_POST_SOCIAL_OG_SEO':
      return {
        ...state,
        postSeoSocialOgData: action.payload,
      }
    case 'STORE_POST_ADVANCE_SEO':
      return {
        ...state,
        postSeoAdvanceData: action.payload,
      }

    default:
      return state
  }
}
