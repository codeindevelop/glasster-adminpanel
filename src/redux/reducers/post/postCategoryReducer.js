const initialState = {
  postCategories: [],
  loadedCategoryById: [],
  categoriesCount: 0,
  selectedCategoryId: 0,
  deleteCategoryModal: false,
  addCategoryModal: false,
  editCategoryModal: false,
  postCategoryLoaded: null,
  postCategoryCreateSucc: null,
  postCategoryUpdateSucc: null,
  postCategoryDeleteSucc: null,
  createCategorySucMSG: null,
  createCategoryErrMSG: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POSTCATEGORY_EDIT_MODAL_SHOW':
      return {
        ...state,
        editCategoryModal: true,
      };
    case 'POST_CATEGORY_UPDATE_SUCCESS':
      return {
        ...state,
        postCategoryUpdateSucc: true,
        editCategoryModal: false,
      };
    case 'POST_CATEGORY_UPDATE_SUCCESS_UNDO':
      return {
        ...state,
        postCategoryUpdateSucc: null,
      };
    case 'CATEGORYPOST_BYID_LOADED':
      return {
        ...state,
        loadedCategoryById: action.payload.category[0],
      };
    case 'SET_POST_CATEGORIES_ID':
      return {
        ...state,
        selectedCategoryId: action.payload,
      };
    case 'GET_POST_CATEGORIES_SUC':
      return {
        ...state,
        postCategories: action.payload.categories,
        categoriesCount: action.payload.totalCount,
      };

    case 'ADD_POST_CATEGORY_MODAL_SHOW':
      return {
        ...state,
        addCategoryModal: true,
      };
    case 'ADD_POST_CATEGORY_MODAL_HIDE':
      return {
        ...state,
        addCategoryModal: false,
      };
    case 'CREATE_POST_CATEGORIES_SUC':
      return {
        ...state,
        postCategoryCreateSucc: true,
      };
    case 'CREATE_POST_CATEGORIES_SUC_UNDO':
      return {
        ...state,
        postCategoryCreateSucc: null,
      };
    case 'POST_CATEGORY_DELETE_MODAL_SHOW':
      return {
        ...state,
        deleteCategoryModal: true,
      };
    case 'POST_CATEGORY_DELETE_MODAL_HIDE':
      return {
        ...state,
        deleteCategoryModal: null,
      };
    case 'DELETE_POST_CATEGORIES_SUC':
      return {
        ...state,
        postCategoryDeleteSucc: true,
        deleteCategoryModal: null,
      };
    case 'DELETE_POST_CATEGORIES_SUC_UNDO':
      return {
        ...state,
        postCategoryDeleteSucc: null,
      };

    default:
      return state;
  }
};
