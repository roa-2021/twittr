import { RECEIVE_USER } from '../actions/userActions'

const initialState = []

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
        state = [action.user]
        return state

    default:
      return state
  }
}

export default userReducer
