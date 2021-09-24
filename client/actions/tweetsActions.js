import { addTweet, getTweet, deleteTweet } from '../apis/tweetsAPI'

// ---- CASES ----
export const RECEIVE_TWEETS = 'RECEIVED_TWEETS'

// ---- ACTIONS ----
export const receiveTweet = tweet => {
  return {
    type: RECEIVE_TWEETS,
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
        const tweets = res // arr of tweet objs
        dispatch(receiveTweet(tweets))
      })
      // .catch(err => console.log(err))
  }
}

export const removeTweet = id => {
  return dispatch => {
    deleteTweet(id)
    .then(res => {
      const removedTweet = res
      dispatch(receiveTweet(removedTweet))
    })
    // .catch(err => console.log(err))
  }
}