import { STORE_FOLLOWERS_CASE } from '../actions/followersActions'

const initialState = []

const followersReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_FOLLOWERS_CASE:
        return action.follower

    default:
      return state
  }
}

export default followersReducer
