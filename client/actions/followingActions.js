import { getWhoUserIsFollowingAPI, userFollowAPI, userUnfollowAPI } from '../apis/followingAPI'

// ---- CASE ----
export const STORE_FOLLOWING_CASE = 'STORE_FOLLOWING_CASE'

// ---- ACTION ----
export const storeFollowingACTION = following => {
  return {
    type: STORE_FOLLOWING_CASE,
    following
  }
}

// ---- THUNKS ----
export const getWhoUserIsFollowingTHUNK = userId => {
  return dispatch => {
    getWhoUserIsFollowingAPI(userId)
    .then(res => {
        const userFollowing = res
        console.log(userFollowing)
        dispatch(storeFollowingACTION(userFollowing))
    })
  }
}

export const userWantsToFollowTHUNK = (userId, followingId) => {
  return dispatch => {
    console.log('followingAction.js ' + followingId)
    userFollowAPI(userId, followingId)
    .then(res => {
        const newFollowing = res
        console.log(newFollowing)
        dispatch(storeFollowingACTION(newFollowing))
    })
  }
}

export const userWantsToUnfollowTHUNK = (userID, followingID) => {
  return dispatch => {
    userUnfollowAPI(userID, followingID)
      .then(res => {
        const deleteStatus = res[0]
        console.log(deleteStatus)
      })
  }
}