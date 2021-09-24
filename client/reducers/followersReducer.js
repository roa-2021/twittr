import { RECEIVE_FOLLOWER } from '../actions/followersActions'

const initialState = []

const followersReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_FOLLOWER:
        return action.follower

    default:
      return state
  }
}

export default followersReducer
