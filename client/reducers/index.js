import { combineReducers } from 'redux'

import userReducer from './userReducer'
import tweetsReducer from './tweetsReducer'
import authReducer from './authReducer'
import followersReducer from './followersReducer'
import followingReducer from './followingReducer'
import commentsReducer from './commentsReducer'
import followUserReducer from './followUserReducer'

export default combineReducers({
  user: userReducer,
  tweet: tweetsReducer,
  auth: authReducer,
  followers: followersReducer,
  following: followingReducer,
  comments: commentsReducer,
  followUser: followUserReducer
})
