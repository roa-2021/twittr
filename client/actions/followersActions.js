import { getUser } from '../apis/followersAPI'

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
export const retrieveFollower = followerID => {
  return dispatch => {
    getUser(followerID)
      .then(res => {
        const retrievedFollower = res[0]
        console.log(retrievedFollower)
        // dispatch(receiveUser(createdUserObj))
      })
      // .catch(err => console.log(err))
  }
}