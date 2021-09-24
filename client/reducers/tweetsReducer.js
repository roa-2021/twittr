import { RECEIVE_TWEETS, RECEIVE_TWEET, ADDITIONAL_TWEET } from '../actions/tweetsActions'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    // case RECEIVE_TWEETS:
    //   state = [...action.tweets]
    case RECEIVE_TWEETS:
      state = [...action.tweet]
    case ADDITIONAL_TWEET:
      state = [...state, action.tweet]

    default:
      return state
  }
}

export default tweetsReducer