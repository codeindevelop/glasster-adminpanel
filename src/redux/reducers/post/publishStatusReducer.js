const initialState = {
  PostpublishStatus: [],
  categoriesCount: 0,
  postCategoryLoading: null,
  postCategoryLoaded: null,
  postCategoryLoadErr: null,
  postCategoryCreateSucc: null,
  postCategoryCreateFail: null,
  postCategoryUpdateSucc: null,
  postCategoryUpdateFail: null,
  postCategoryDeleteSucc: null,
  postCategoryDeleteFail: null,
  addModalShow: false,
  addModalHide: false,
  createCategorySucMSG: null,
  createCategoryErrMSG: null,
};

export const publishStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTSTATUS_SUCCESS':
      return {
        ...state,
        PostpublishStatus: action.payload.modes,
      };

    default:
      return state;
  }
};
