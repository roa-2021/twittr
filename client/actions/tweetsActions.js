import { addTweet, getTweet, deleteTweet } from '../apis/tweetsAPI'

// ---- CASES ----
export const RECEIVE_TWEETS = 'RECEIVED_TWEETS'
export const RECEIVE_TWEET = 'RECEIVED_TWEET'
export const ADDITIONAL_TWEET = 'RECEIVED_ADDITIONAL_TWEET'

// ---- ACTIONS ----
// export const receiveTweets = tweets => {
//   return {
//     type: RECEIVE_TWEETS,
//     tweets
//   }
// }
export const receiveTweet = tweet => {
  return {
    type: RECEIVE_TWEETS,
    tweet
  }
}
export const addAdditionalTweet = tweet => {
  return {
    type: ADDITIONAL_TWEET,
    tweet
  }
}

// ---- THUNKS ----
export const createTweet = newTweet => {
  return dispatch => {
    addTweet(newTweet)
    .then(res => {
      const createdTweetId = res[0]
      const createdTweetObj = {
        id: createdTweetId,
        ...newTweet
      }
      dispatch(receiveTweet(createdTweetObj))
    })
    // .catch(err => console.log(err))
  }
}

export const retrieveUserTweets = userId => {
  return dispatch => {
    getTweet(userId)
      .then(res => {
        const tweets = res // this is an array of the tweets
        dispatch(receiveTweet(tweets))
      })
      // .catch(err => console.log(err))
  }
}

// export const retrieveTweets = () => {
//   return dispatch => {
//     return request
//       .get() // this one is for all tweets
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }

export const removeTweet = id => {
  return dispatch => {
    deleteTweet(id)
    .then(res => {
      const removedTweet = res[0]
      dispatch(receiveTweet(removedTweet))
    })
    // .catch(err => console.log(err))
  }
}