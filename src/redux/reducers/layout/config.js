const initialState = {
  direction: 'rtl',
  darkTheme: false,
};

export const config = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DIR':
      return {
        ...state,
        direction: action.payload,
      };
    case 'DIR_RTL':
      return {
        ...state,
        direction: 'rtl',
      };
    case 'DIR_LTR':
      return {
        ...state,
        direction: 'ltr',
      };
    case 'DARKMODE_ON':
      return {
        ...state,
        darkTheme: true,
      };
    case 'DARKMODE_OFF':
      return {
        ...state,
        darkTheme: false,
      };

    default:
      return state;
  }
};
