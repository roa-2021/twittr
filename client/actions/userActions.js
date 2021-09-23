import { addUser, getUser, updateUserDetails } from '../apis/userAPI'

// ---- CASE ----
export const RECEIVE_USER = 'RECEIVED_USER_DETAILS'

// ---- ACTION ----
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

// ---- THUNKS ----
export const createUser = newUser => {
  return dispatch => {
    addUser(newUser)
      .then(res => {
        const createdUserId = res[0]
        const createdUserObj = {
          id: createdUserId,
          ...newUser
        }
        dispatch(receiveUser(createdUserObj))
      })
      // .catch(err => console.log(err))
  }
}

export const getUserDetails = id => {{
  return dispatch => {
    getUser(id)
      .then(res => {
        const requestedUser = res[0]
        dispatch(receiveUser(requestedUser))
      })
      // .catch(err => console.log(err))
  }
}}

export const updateUser = userDetails => {
  return dispatch => {{
    return updateUserDetails(userDetails)
    .then(res => {
      const upToDateUser = res[0]
      dispatch(receiveUser(upToDateUser))
    })
      // .catch(err => console.log(err))
  }}
}

