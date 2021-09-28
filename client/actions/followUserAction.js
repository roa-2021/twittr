
// ---- CASE ----
export const FOLLOW_USER_CASE = 'FOLLOW_USER'

import { userFollowAPI, userUnfollowAPI } from "../apis/followingAPI"
import { getWhoUserIsFollowingTHUNK } from '../actions/followingActions'
import { getFollowersOfUserTHUNK} from '../actions/followersActions'
// ---- ACTION ----
export const followUser = (followers,following) => {
    // console.log('hey', followers, following)
  return {
    type: FOLLOW_USER_CASE,
    followers,
    following
  }
}

export const addFollowing = (followers, following) => {
    return dispatch => {
        userFollowAPI(followers, following).then(res => {
        //    dispatch(getWhoUserIsFollowingTHUNK())
        //     dispatch(getFollowersOfUserTHUNK())
        // change the redux here
        // console.log('change redux here')
       

        dispatch(getWhoUserIsFollowingTHUNK(followers))
        dispatch(getFollowersOfUserTHUNK(followers))
        //remove from followers in the store
        //add to followers in the store

        })
    }
}

// export const removeFollowing = (followers, following) => {
//  //
//  return dispatch => {
//   userFollowAPI(followers, following).then(res => {
//   return dispatch => {
//     userUnfollowAPI(followers, following).then(res => {
//       //
//       dispatch(getWhoUserIsFollowingTHUNK(followers))
//       dispatch(getFollowersOfUserTHUNK(followers))
//     })
//   }
// }

export const removeFollowing = (followers, following) => {
  console.log(followers,following)
  return dispatch => {
    userUnfollowAPI(followers, following).then(res => {
      // console.log(res)
      // const removeTweet = res;
        // userUnfollowAPI
      dispatch(getWhoUserIsFollowingTHUNK(followers))
      dispatch(getFollowersOfUserTHUNK(followers))

      })
  }
}

// export const removeATweetByIDTHUNK = id => {
//   return dispatch => {
//     deleteATweetAPI(id)
//     .then(res => {
//       const removedTweet = res
//       dispatch(deleteTweetACTION(id))
//     })
//     // .catch(err => console.log(err))
//   }
// }