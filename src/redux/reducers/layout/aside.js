const initialState = {
  open: true,
};

export const asideReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASIDE_OPEN':
      return {
        ...state,
        open: true,
      };
    case 'ASIDE_CLOSE':
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};
