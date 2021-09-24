import { RECEIVE_TWEETS } from '../actions/tweetsActions'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TWEETS:
      return action.tweet

    default:
      return state
  }
}

export default tweetsReducer