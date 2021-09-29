
import { STORE_TWEETS_CASE, DELETE_TWEET_CASE ,REFRESH_TWEETS_CASE, ADD_LIKE,DELETE_LIKE, UPDATE_LIKE} from '../actions/tweetsActions'


import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_APP:
      return initialState
    case STORE_TWEETS_CASE:
      return [...action.tweet, ...state]
    case REFRESH_TWEETS_CASE:
      return [...action.tweets]
    case DELETE_TWEET_CASE:
      return state.filter(item => (item.id != action.tweetId))
      case ADD_LIKE:
      var newState = state.filter(tweet=>(tweet.id != action.tweet.id))
      return [...newState,action.tweet]
    case DELETE_LIKE:
      var newState = state.filter(tweet=>(tweet.id != action.tweet.id))
      return [...newState,action.tweet]
    case UPDATE_LIKE:
        var newState = state.filter(tweet=>(tweet.id != action.tweet.id))
        action.tweet.like_count+=1
    return [...newState,action.tweet]
    default:
      return state
  }
}

export default tweetsReducer