const initialState = {
  direction: 'rtl',
  darkMode: false,
};

export const config = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DIR':
      return {
        ...state,
        direction: action.payload,
      };
    case 'DIR_RTL':
      localStorage.setItem('direction', 'rtl');
      return {
        ...state,
        direction: 'rtl',
      };
    case 'DIR_LTR':
      localStorage.setItem('direction', 'ltr');
      return {
        ...state,
        direction: 'ltr',
      };
    case 'DARKMODE_ON':
      localStorage.setItem('theme', 'dark');
      return {
        ...state,
        darkMode: true,
      };
    case 'DARKMODE_OFF':
      localStorage.setItem('theme', 'light');
      return {
        ...state,
        darkMode: false,
      };

    default:
      return state;
  }
};
