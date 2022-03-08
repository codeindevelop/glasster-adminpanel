const initialState = {
  user: [],
  personalInfo: [],
  roles: [],
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        user: action.payload.user,
        personalInfo: action.payload.personalInfo,
        roles: action.payload.user.roles[0],
      }

    default:
      return state
  }
}
