const initialState = {
  showInvestMenu: false,
  showMobileMenu: false,
};

export const mainMenu = (state = initialState, action) => {
  switch (action.type) {
    case "ENABLE_INVEST_MENU":
      return {
        ...state,
        showInvestMenu: true,
      };
    case "DISABLE_INVEST_MENU":
      return {
        ...state,
        showInvestMenu: false,
      };
    case "ENABLE_MOBILE_MENU":
      return {
        ...state,
        showMobileMenu: true,
      };
    case "DISABLE_MOBILE_MENU":
      return {
        ...state,
        showMobileMenu: false,
      };

    default:
      return state;
  }
};
