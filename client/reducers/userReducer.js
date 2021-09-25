import { STORE_USER_CASE } from '../actions/userActions'

const initialState = []

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_USER_CASE:
        return action.user

    default:
      return state
  }
}

export default userReducer
