import { RECEIVE_USER } from '../actions/userActions'

const initialState = []

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
        return action.user

    default:
      return state
  }
}

export default userReducer
