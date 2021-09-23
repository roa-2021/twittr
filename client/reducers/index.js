import { combineReducers } from 'redux'

import userReducer from './userReducer'
import postsReducer from './postsReducer'
import authReducer from './authReducer'

export default combineReducers({
  userReducer,
  postsReducer,
  authReducer
})
