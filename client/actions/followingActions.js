import { getFollowing, addFollowing, deleteFollowing } from '../apis/followingAPI'

// ---- CASE ----
export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING'

// ---- ACTION ----
export const receiveFollowing = following => {
  return {
    type: RECEIVE_FOLLOWING,
    following
  }
}

// ---- THUNKS ----
export const getUserFollowing = userId => {
  return dispatch => {
    getFollowing(userId)
    .then(res => {
        const userFollowing = res
        console.log(userFollowing)
        dispatch(receiveFollowing(userFollowing))
    })
  }
}

export const addUserFollowing = (userId, followingId) => {
  return dispatch => {
    console.log('followingAction.js ' + followingId)
    addFollowing(userId, followingId)
    .then(res => {
        const newFollowing = res
        console.log(newFollowing)
        dispatch(receiveFollowing(newFollowing))
    })
  }
}

export const deleteAFollowing = (userID, followingID) => {
  return dispatch => {
    deleteFollowing(userID, followingID)
      .then(res => {
        const deleteStatus = res[0]
        console.log(deleteStatus)
      })
  }
}