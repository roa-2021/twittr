import { addATweetAPI, getUsersTweetsAPI, deleteATweetAPI } from '../apis/tweetsAPI'

// ---- CASES ----
export const STORE_TWEETS_CASE = 'STORED_TWEETS'

// ---- ACTIONS ----
export const storeTweetACTION = tweet => {
  return {
    type: STORE_TWEETS_CASE,
    tweet
  }
}

// ---- THUNKS ----
export const createANewTweetTHUNK = newTweet => {
  return dispatch => {
    addATweetAPI(newTweet)
    .then(res => {
      console.log('hi')
      const createdTweetId = res[0]
      const createdTweetObj = {
        id: createdTweetId,
        ...newTweet
      }
      dispatch(storeTweetACTION([createdTweetObj]))
    })
    // .catch(err => console.log(err))
  }
}

export const retrieveAUsersTweetsTHUNK = userId => {
  return dispatch => {
    getUsersTweetsAPI(userId)
      .then(res => {
        const tweets = res // arr of tweet objs
        dispatch(storeTweetACTION(tweets))
      })
      // .catch(err => console.log(err))
  }
}

export const removeATweetByIDTHUNK = id => {
  return dispatch => {
    deleteATweetAPI(id)
    .then(res => {
      const removedTweet = res
      dispatch(storeTweetACTION(removedTweet))
    })
    // .catch(err => console.log(err))
  }
}