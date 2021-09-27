import { STORE_FOLLOWERS_CASE } from '../actions/followersActions'
import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const followersReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_APP:
      return initialState
    case STORE_FOLLOWERS_CASE:
      return action.follower

    default:
      return state
  }
}

export default followersReducer
