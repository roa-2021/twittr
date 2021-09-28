import { getUsersFollowersAPI } from '../apis/followersAPI'

// ---- CASE ----
export const STORE_FOLLOWERS_CASE = 'STORED_FOLLOWER_DETAILS'

// ---- ACTION ----
export const storeFollowersACTION = follower => {
  return {
    type: STORE_FOLLOWERS_CASE,
    follower
  }
}

// ---- ACTION ----
export const getFollowersOfUserTHUNK = usersID => {
  return dispatch => {
    getUsersFollowersAPI(usersID)
      .then(theUsersFollowers => {
        dispatch(storeFollowersACTION(theUsersFollowers))
      })
  }
}