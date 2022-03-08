const initialState = {
  allRoles: [],
  rolesCount: 0,
  rolesWithPermissions: [],
  selectedRoleDetail: [],
  rolesWithPermissionCount: 0,
  selected_role_id: 0,
  deleteRoleDialog: null,
  editRoleDialog: null,
  rolePermissionsDialog: null,
  assignPermissionModal: null,
  createRoleSucMsg: null,
  deleteRoleSucMsg: null,
  assignRoleSucMsg: null,
  revokeRoleSucMsg: null,
  assignPermissionToRoleSucMsg: null,
  revokePermissionFromRoleSucMsg: null,
};

export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PERMISSION_FOR_ROLE_SUC':
      return {
        ...state,
        selectedRoleDetail: action.payload,
      };

    case 'ROLE_PERMISSIONS_DIALOG_SHOW':
      return {
        ...state,
        rolePermissionsDialog: true,
      };
    case 'ROLE_PERMISSIONS_DIALOG_HIDE':
      return {
        ...state,
        rolePermissionsDialog: null,
      };
    case 'GET_ROLES_PERMISSION_SUC':
      return {
        ...state,
        rolesWithPermissions: action.payload.role_permissions,
        rolesWithPermissionCount: action.payload.rolesCount,
      };
    case 'ASSIGN_PERMISSION_ROLE_MODAL_SHOW':
      return {
        ...state,
        assignPermissionModal: true,
      };
    case 'ASSIGN_PERMISSION_ROLE_MODAL_HIDE':
      return {
        ...state,
        assignPermissionModal: null,
      };
    case 'EDIT_ROLE_DIALOG_SHOW_HIDE':
      return {
        ...state,
        editRoleDialog: null,
      };
    case 'DELETE_ROLE_DIALOG_SHOW':
      return {
        ...state,
        deleteRoleDialog: true,
      };
    case 'DELETE_ROLE_DIALOG_HIDE':
      return {
        ...state,
        deleteRoleDialog: null,
      };
    case 'GET_ALL_ROLES_SUC':
      return {
        ...state,
        allRoles: action.payload.roles,
        rolesCount: action.payload.rolesCount,
      };
    case 'ROLE_ROW_ID':
      return {
        ...state,
        selected_role_id: action.payload,
      };
    case 'CREATE_ROLE_SUC':
      return {
        ...state,
        createRoleSucMsg: true,
      };
    case 'CREATE_ROLE_SUC_UNDO':
      return {
        ...state,
        createRoleSucMsg: null,
      };
    case 'DELETE_ROLE_SUC':
      return {
        ...state,
        deleteRoleSucMsg: true,
      };
    case 'DELETE_ROLE_SUC_UNDO':
      return {
        ...state,
        deleteRoleSucMsg: null,
      };
    case 'ASSIGN_ROLE_SUC':
      return {
        ...state,
        assignRoleSucMsg: true,
      };
    case 'ASSIGN_ROLE_SUC_UNDO':
      return {
        ...state,
        assignRoleSucMsg: null,
      };
    case 'ROLE_REVOKE_SUC':
      return {
        ...state,
        revokeRoleSucMsg: true,
      };
    case 'ROLE_REVOKE_SUC_UNDO':
      return {
        ...state,
        revokeRoleSucMsg: null,
      };
    case 'ASSIGN_PERMISSION_TO_ROLE_SUCC':
      return {
        ...state,
        assignPermissionToRoleSucMsg: true,
      };
    case 'ASSIGN_PERMISSION_TO_ROLE_SUCC_UNDO':
      return {
        ...state,
        assignPermissionToRoleSucMsg: null,
      };
    case 'REVOKE_PERMISSION_FROM_ROLE_SUCC':
      return {
        ...state,
        revokePermissionFromRoleSucMsg: true,
      };
    case 'REVOKE_PERMISSION_FROM_ROLE_SUCC_UNDO':
      return {
        ...state,
        revokePermissionFromRoleSucMsg: null,
      };

    default:
      return state;
  }
};
