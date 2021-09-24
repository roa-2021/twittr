import { combineReducers } from 'redux'

import userReducer from './userReducer'
import tweetsReducer from './tweetsReducer'
import authReducer from './authReducer'

export default combineReducers({
  user: userReducer,
  tweet: tweetsReducer,
  auth: authReducer
})
