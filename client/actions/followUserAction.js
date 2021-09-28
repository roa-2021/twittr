
// ---- CASE ----
export const FOLLOW_USER_CASE = 'FOLLOW_USER'

import { userFollowAPI } from "../apis/followingAPI"
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
        userFollowAPI(followers,following).then(res => {
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

// addATweetAPI(newTweet)
//     .then(res => {
//       const createdTweetId = res[0]
//       const createdTweetObj = {
//         id: createdTweetId,
//         ...newTweet
//       }
//       dispatch(storeTweetACTION([createdTweetObj]))
//     })