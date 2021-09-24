import { STORE_TWEETS_CASE } from '../actions/tweetsActions'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_TWEETS_CASE:
      return action.tweet

    default:
      return state
  }
}

export default tweetsReducer