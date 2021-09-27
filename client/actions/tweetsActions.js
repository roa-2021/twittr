import { addATweetAPI, getUsersTweetsAPI, deleteATweetAPI,updateLikeAPI,updateUnLikeAPI,addLikeAPI} from '../apis/tweetsAPI'

// ---- CASES ----
export const STORE_TWEETS_CASE = 'STORED_TWEETS'
export const ADD_LIKE = 'ADD_LIKE'
export const UPDATE_LIKE = 'UPDATE_LIKE'
export const UPDATE_UNLIKE = 'UPDATE_UNLIKE'
// ---- ACTIONS ----
export const storeTweetACTION = tweet => {
  return {
    type: STORE_TWEETS_CASE,
    tweet
  }
}

export const addLikeAction = tweet => {
  return {
    type: ADD_LIKE,
    tweet
  }
}

export const updateLikeAction = tweet => {
  return {
    type: UPDATE_LIKE,
    tweet
  }
}

export const updateUnLikeAction = tweet => {
  return {
    type: UPDATE_UNLIKE,
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
      dispatch(storeTweetACTION(removedTweet))
    })
    // .catch(err => console.log(err))
  }
}

export const addLikeTHUNK = tweet => {
  return dispatch => {
    addLikeAPI(tweet)
    .then(res => {
      dispatch(addLikeAction(res))
    })
    // .catch(err => console.log(err))
  }
}

export const updateLikeTHUNK = tweet => {
  return dispatch => {
    updateLikeAPI(tweet)
    .then(res => {
      dispatch(updateLikeAction(tweet))
    })
    // .catch(err => console.log(err))
  }
}


export const updateUnLikeTHUNK = tweet => {
  return dispatch => {
    updateUnLikeAPI(tweet)
    .then(res => {
      dispatch(updateUnLikeAction(tweet))
    })
    // .catch(err => console.log(err))
  }
}