const initialState = {
  direction: "rtl",
  darkTheme: false,
};

export const config = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DIR":
      return {
        ...state,
        direction: action.payload,
      };

    default:
      return state;
  }
};
