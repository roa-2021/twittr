import { STORE_TWEETS_CASE, DELETE_TWEET_CASE, REFRESH_TWEETS_CASE } from '../actions/tweetsActions'
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
    default:
      return state
  }
}

export default tweetsReducer