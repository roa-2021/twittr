import { getFollower } from '../apis/followersAPI'

// ---- CASE ----
export const RECEIVE_FOLLOWER = 'RECEIVED_FOLLOWER_DETAILS'

// ---- ACTION ----
export const receiveFollower = follower => {
  return {
    type: RECEIVE_FOLLOWER,
    follower
  }
}

// ---- ACTION ----
export const retrieveFollowers = followerID => {
  return dispatch => {
    getFollower(followerID)
      .then(retrievedFollowers => {
        dispatch(receiveFollower(retrievedFollowers))
      })
      // .catch(err => console.log(err))
  }
}