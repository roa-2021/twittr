import { addATweetAPI, getUsersTweetsAPI, deleteATweetAPI, getAllUsersFollowingTweetsAPI,deleteLikeAPI,addLikeAPI,updateLikeCountAPI } from '../apis/tweetsAPI'

// ---- CASES ----
export const STORE_TWEETS_CASE = 'STORED_TWEETS'
export const DELETE_TWEET_CASE = 'NUKE_TWEET'
export const ADD_LIKE = 'ADD_LIKE'
export const DELETE_LIKE = 'DELETE_LIKE'
export const UPDATE_LIKE = 'UPDATE_LIKE'
export const REFRESH_TWEETS_CASE = 'TWEETS_REFRESHED'


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

export const updateLikeCountAction = tweet => {
  return {
    type: UPDATE_LIKE,
    tweet
  }
}

export const refreshTweetsACTION = tweets => {
  return {
    type: REFRESH_TWEETS_CASE,
    tweets
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
        dispatch(refreshTweetsACTION(allFollowingTweets))
      })
      // .catch(err => console.log(err))
  }
}

export const addLikeTHUNK = tweet => {
  // console.log("thunk",tweet)
  return dispatch => {
    addLikeAPI(tweet)
    .then(res => {
      dispatch(addLikeAction(tweet))
    })
    .catch(err => console.log(err))
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

export const updateLikeCountTHUNK= tweet => {
  // console.log("thunk",tweet)
  return dispatch => {
    updateLikeCountAPI(tweet)
    .then(res => {
      dispatch(updateLikeCountAction(tweet))
    })
    // .catch(err => console.log(err))
  }
}
