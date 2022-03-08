import axios from 'axios'

import Crud from '../../cruds'

/* ------------------------- Get all Roles ------------------------ */
export const fetchAllRoles = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token')

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  axios
    .get(Crud.getAllRolesURL, config)
    .then((res) => {
      dispatch({
        type: 'GET_ALL_ROLES_SUC',
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'GET_ALL_ROLES_ERR',
        payload: err.data,
      })
    })
}

/* ------------------------- Get all Roles ------------------------ */
export const getRolesWithPermissionsAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem('token')

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  axios
    .get(Crud.getRolesPermissionURL, config)
    .then((res) => {
      dispatch({
        type: 'GET_ROLES_PERMISSION_SUC',
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'GET_ROLES_PERMISSION_ERR',
        payload: err.data,
      })
    })
}

/* ------------------------- Get all Roles ------------------------ */
export const getRolePermissionsById =
  ({id}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    axios
      .get(`${Crud.getRolesPermissionByIdURL}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'GET_PERMISSION_FOR_ROLE_SUC',
          payload: res.data.role_permissions[0],
        })
      })
      .catch((err) => {
        dispatch({
          type: 'GET_PERMISSION_FOR_ROLE_ERR',
          payload: err.data,
        })
      })
  }

/* ------------------------- Create NEW Role ------------------------- */

export const createRole =
  ({role_name}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const body = {
      role_name,
    }

    axios
      .post(Crud.createRoleURL, body, config)
      .then((res) => {
        dispatch({
          type: 'CREATE_ROLE_SUC',
          payload: res.data,
        })
        setTimeout(() => {
          dispatch(undoCreateRoleSucMSG())
        }, 2000)
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_ROLE_ERR',
          payload: err.data,
        })
      })
  }

export const undoCreateRoleSucMSG = () => (dispatch) => {
  dispatch({
    type: 'CREATE_ROLE_SUC_UNDO',
  })
}

/* ------------------------------- Delete Role ------------------------------ */

export const deleteRole =
  ({id}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    axios
      .delete(`${Crud.deleteRoleURL}/${id}`, config)
      .then((res) => {
        dispatch({
          type: 'DELETE_ROLE_SUC',
          payload: res.data,
        })

        setTimeout(() => {
          dispatch(undoDeleteRoleMSG())
        }, 4000)
      })
      .catch((err) => {
        dispatch({
          type: 'DELETE_ROLE_ERR',
          payload: err.data,
        })
      })
  }

/* -------------------------- Undo Role Delete MSG -------------------------- */
export const undoDeleteRoleMSG = () => (dispatch) => {
  dispatch({
    type: 'DELETE_ROLE_SUC_UNDO',
  })
}

/* ------------------------- Assign Role To User ------------------------- */

export const roleToUser =
  ({user_id, rolenames}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const roleContent = rolenames.map((role) => role.name)

    const body = {
      user_id,
      rolenames: roleContent,
    }

    axios
      .post(Crud.assignRoleToUserURL, body, config)
      .then((res) => {
        dispatch({
          type: 'ASSIGN_ROLE_SUC',
          payload: res.data,
        })
        setTimeout(() => {
          dispatch(undoAssignRoleSucMSG())
        }, 2000)
      })
      .catch((err) => {
        dispatch({
          type: 'ASSIGN_ROLE_ERR',
          payload: err.data,
        })
      })
  }

export const undoAssignRoleSucMSG = () => (dispatch) => {
  dispatch({
    type: 'ASSIGN_ROLE_SUC_UNDO',
  })
}

/* ------------------------- Revoke Role To User ------------------------- */

export const revokeUserRole =
  ({user_id, rolename}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const body = {
      user_id,
      rolename,
    }

    axios
      .post(Crud.revokeUserRoleURL, body, config)
      .then((res) => {
        dispatch({
          type: 'ROLE_REVOKE_SUC',
          payload: res.data,
        })
        setTimeout(() => {
          dispatch(undoRoleRevokeSucMSG())
        }, 2000)
      })
      .catch((err) => {
        dispatch({
          type: 'ROLE_REVOKE_ERR',
          payload: err.data,
        })
        console.log(err)
      })
  }

export const undoRoleRevokeSucMSG = () => (dispatch) => {
  dispatch({
    type: 'ROLE_REVOKE_SUC_UNDO',
  })
}

/* ------------------------- Assign Permission To Role ------------------------- */

export const permissionToRole =
  ({role_id, permission}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // const roleContent = rolenames.map((role) => role.name);

    const body = {
      role_id,
      permission,
    }

    axios
      .post(Crud.roleGivePermissionURL, body, config)
      .then((res) => {
        dispatch({
          type: 'ASSIGN_PERMISSION_TO_ROLE_SUCC',
          payload: res.data,
        })

        setTimeout(() => {
          dispatch(undoAsignRoleToPermisionSucMSG())
        }, 2000)
      })
      .catch((err) => {
        dispatch({
          type: 'ASSIGN_PERMISSION_TO_ROLE_ERR',
          payload: err.data,
        })
      })
  }

export const undoAsignRoleToPermisionSucMSG = () => (dispatch) => {
  dispatch({
    type: 'ASSIGN_PERMISSION_TO_ROLE_SUCC_UNDO',
  })
}
/* ------------------------- Revoke Permission from role ------------------------- */

export const revokePermissionRole =
  ({role_id, permission_id}) =>
  (dispatch) => {
    // Get token from localstorage
    const token = localStorage.getItem('token')

    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // const roleContent = rolenames.map((role) => role.name);

    const body = {
      role_id,
      permission_id,
    }

    axios
      .post(Crud.revokePermissionFromRoleURL, body, config)
      .then((res) => {
        dispatch({
          type: 'REVOKE_PERMISSION_FROM_ROLE_SUCC',
          payload: res.data,
        })

        setTimeout(() => {
          dispatch(undoPRRSSuccMsg())
        }, 2000)
      })
      .catch((err) => {
        dispatch({
          type: 'REVOKE_PERMISSION_FROM_ROLE_SUCC',
          payload: err.data,
        })
      })
  }

export const undoPRRSSuccMsg = () => (dispatch) => {
  dispatch({
    type: 'REVOKE_PERMISSION_FROM_ROLE_SUCC_UNDO',
  })
}
