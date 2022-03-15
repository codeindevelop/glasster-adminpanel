const initialState = {
  postCategoriesCount: null,
  postsCount: null,
  usersCount: null,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DASHBOARD_DATA_SUC':
      return {
        ...state,
        postCategoriesCount: action.payload.categoryCount,
        postsCount: action.payload.postsCount,
        usersCount: action.payload.usersCount,
      };

    default:
      return state;
  }
};
