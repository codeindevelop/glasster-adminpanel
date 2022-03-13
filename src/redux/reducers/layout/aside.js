const initialState = {
  asideMinimize: false,
};

export const asideReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASIDE_MINIMIZE':
      return {
        ...state,
        asideMinimize: true,
      };
    case 'ASIDE_MAXIMIZE':
      return {
        ...state,
        asideMinimize: false,
      };

    default:
      return state;
  }
};
