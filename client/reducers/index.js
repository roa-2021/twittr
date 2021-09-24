import { combineReducers } from 'redux'

import userReducer from './userReducer'
import tweetsReducer from './tweetsReducer'
import authReducer from './authReducer'

export default combineReducers({
  userReducer,
  tweetsReducer,
  authReducer
})
