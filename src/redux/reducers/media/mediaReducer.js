const initialState = {
  productsMedia: [],
  postsMedia: [],
  uploadsMedia: [],
  mediaLoadErr: null,
  modalShow: false,
  mediaCounts: 0,
  uploadSucc: null,
  postMediaModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MEDIA_LOADSUCCESS':
      return {
        ...state,
        productsMedia: action.payload.products_images,
        postsMedia: action.payload.posts_images,
        uploadsMedia: action.payload.uploads_media,
        mediaCounts: action.payload.media_counts,
      };

    case 'MEDIA_LOADERR':
      return {
        ...state,
        mediaLoadErr: true,
      };
    case 'ADD_MEDIA_MODAL_SHOW':
      return {
        ...state,
        modalShow: true,
      };
    case 'ADD_MEDIA_MODAL_HIDE':
      return {
        ...state,
        modalShow: false,
      };
    case 'GET_MEDIA_COUNTS':
      return {
        ...state,
        mediaCounts: action.payload.media_counts,
      };
    case 'UPLOAD_MEDIA_COMPLITE':
      return {
        ...state,
        uploadSucc: true,
        modalShow: false,
        postMediaModal: false,
      };
    case 'UPLOAD_MEDIA_COMPLITE_UNDO':
      return {
        ...state,
        uploadSucc: null,
      };
    case 'ADD_POSTMEDIA_MODAL_SHOW':
      return {
        ...state,
        postMediaModal: true,
      };
    case 'POSTMEDIA_MODAL_HIDE':
      return {
        ...state,
        postMediaModal: false,
      };

    default:
      return state;
  }
};
