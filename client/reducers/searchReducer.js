import {SEARCH_USER_CASE} from '../actions/userActions'
import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_APP:
      return initialState
    case SEARCH_USER_CASE:
      return action.user
    default:
      return state
  }
}

export default searchReducer