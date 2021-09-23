import { RECEIVE_USER, RECEIVE_NEW_USER } from '../actions/userActions'

const initialState = []

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_NEW_USER:
        state = [...state, action.newUser]
        return state

    default:
      return state
  }
}

export default userReducer
