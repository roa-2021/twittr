import { addATweetAPI, getUsersTweetsAPI, deleteATweetAPI, getAllUsersFollowingTweetsAPI,deleteLikeAPI,addLikeAPI } from '../apis/tweetsAPI'

// ---- CASES ----
export const STORE_TWEETS_CASE = 'STORED_TWEETS'
export const DELETE_TWEET_CASE = 'NUKE_TWEET'
export const ADD_LIKE = 'ADD_LIKE'
export const DELETE_LIKE = 'DELETE_LIKE'

// ---- ACTIONS ----
export const storeTweetACTION = tweet => {
  return {
    type: STORE_TWEETS_CASE,
    tweet
  }
}

export const deleteTweetACTION = tweetId => {
  return {
    type: DELETE_TWEET_CASE,
    tweetId
  }
}
export const addLikeAction = tweet => {
  return {
    type: ADD_LIKE,
    tweet
  }
}


export const deleteLikeAction = tweet => {
  return {
    type: DELETE_LIKE,
    tweet
  }
}

// ---- THUNKS ----
export const createANewTweetTHUNK = newTweet => {
  return dispatch => {
    addATweetAPI(newTweet)
    .then(res => {
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
      dispatch(deleteTweetACTION(id))
    })
    // .catch(err => console.log(err))
  }
}

export const getAUsersFollowingTweetsTHUNK = userID => {
  return dispatch => {
    getAllUsersFollowingTweetsAPI(userID)
      .then(allFollowingTweets => {
        dispatch(storeTweetACTION(allFollowingTweets))
      })
      // .catch(err => console.log(err))
  }
}

export const addLikeTHUNK = tweet => {
  return dispatch => {
    addLikeAPI(tweet)
    .then(res => {
      console.log(res)
      dispatch(addLikeAction(res))
    })
    // .catch(err => console.log(err))
  }
}

export const deleteLikeTHUNK = tweet => {
  return dispatch => {
    deleteLikeAPI(tweet)
    .then(res => {
      dispatch(deleteLikeAction(tweet))
    })
    // .catch(err => console.log(err))
  }
}
