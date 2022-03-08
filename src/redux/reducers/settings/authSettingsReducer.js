const initialState = {
  register_type: 'full',
  allUsers: [],
  loadedUserById: [],
  row_selected_id: 0,
  usersCount: 0,
  can_register: true,
  facebook_login: false,
  google_login: false,
  twitter_login: false,
  deleteUserSucMsg: null,
  createUserSucMsg: null,
  editUserSucMsg: null,
  userDeleteDialog: null,
  userCreateDialog: null,
  editUserDialog: null,
  userHeaderCountData: [],
};

export const authSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_SUC':
      return {
        ...state,
        allUsers: action.payload.users,
        usersCount: action.payload.usersCounts,
      };
    case 'GET_USER_BY_ID_SUCC':
      return {
        ...state,
        loadedUserById: action.payload.user[0],
      };
    case 'USER_ROW_ID':
      return {
        ...state,
        row_selected_id: action.payload,
      };
    case 'EDIT_USER_SUCC_MSG':
      return {
        ...state,
        editUserSucMsg: true,
        editUserDialog: null,
      };
    case 'EDIT_USER_SUCC_MSG_UNDO':
      return {
        ...state,
        editUserSucMsg: null,
      };
    case 'EDIT_USER_DIALOG_SHOW':
      return {
        ...state,
        editUserDialog: true,
      };
    case 'EDIT_USER_DIALOG_HIDE':
      return {
        ...state,
        editUserDialog: null,
        loadedUserById: [],
      };
    case 'CREATE_USER_DIALOG_SHOW':
      return {
        ...state,
        userCreateDialog: true,
      };
    case 'CREATE_USER_SUCC_MSG':
      return {
        ...state,
        createUserSucMsg: true,
        userCreateDialog: null,
      };
    case 'CREATE_USER_SUCC_MSG_UNDO':
      return {
        ...state,
        createUserSucMsg: null,
      };
    case 'DELETE_DIALOG_SHOW':
      return {
        ...state,
        userDeleteDialog: true,
      };
    case 'DELETE_USER_SUC':
      return {
        ...state,
        deleteUserSucMsg: true,
        userDeleteDialog: null,
      };
    case 'DELETE_USER_SUC_UNDO':
      return {
        ...state,
        deleteUserSucMsg: null,
      };
    case 'DELETE_DIALOG_SHOW_HIDE':
      return {
        ...state,
        userDeleteDialog: null,
      };
    case 'CHANGE_REGISTER_FULL':
      return {
        ...state,
        register_type: 'full',
      };
    case 'CHANGE_REGISTER_EMAIL':
      return {
        ...state,
        register_type: 'email',
      };
    case 'CHANGE_REGISTER_MOBILE_OTP':
      return {
        ...state,
        register_type: 'otp-mobile',
      };
    case 'ENABLE_REGISTER':
      return {
        ...state,
        can_register: true,
      };
    case 'DISABLE_REGISTER':
      return {
        ...state,
        can_register: false,
      };
    case 'GET_USER_HEADER_SUC':
      return {
        ...state,
        userHeaderCountData: action.payload,
      };

    default:
      return state;
  }
};
