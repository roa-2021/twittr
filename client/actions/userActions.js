import { addAUserAPI, getAUserByIdAPI, updateAUsersDetailsAPI } from '../apis/userAPI'

// ---- CASE ----
export const STORE_USER_CASE = 'STORED_USER_DETAILS'

// ---- ACTION ----
export const storeUserACTION = user => {
  return {
    type: STORE_USER_CASE,
    user
  }
}

// ---- THUNKS ----
export const createAUserTHUNK = newUser => {
  return dispatch => {
    addAUserAPI(newUser)
      .then(res => {
        const createdUserId = res[0]
        const createdUserObj = {
          id: createdUserId,
          ...newUser
        }
        dispatch(storeUserACTION(createdUserObj))
      })
      // .catch(err => console.log(err))
  }
}

export const getAUsersDetailsTHUNK = usersId => {{
  return dispatch => {
    getAUserByIdAPI(usersId)
      .then(res => {
        const requestedUser = res[0]
        dispatch(storeUserACTION(requestedUser))
      })
      // .catch(err => console.log(err))
  }
}}

export const updateAUserTHUNK = usersNewDetailsObj => {
  return dispatch => {{
    return updateAUsersDetailsAPI(usersNewDetailsObj)
    .then(res => {
      const upToDateUser = res[0]
      dispatch(storeUserACTION(upToDateUser))
    })
      // .catch(err => console.log(err))
  }}
}

