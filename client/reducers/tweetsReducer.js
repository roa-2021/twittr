import { STORE_TWEETS_CASE,DELETE_TWEET_CASE,ADD_LIKE,UPDATE_UNLIKE,UPDATE_LIKE} from '../actions/tweetsActions'
import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_APP:
      return initialState
    case STORE_TWEETS_CASE:
      return [...action.tweet, ...state]
    case ADD_LIKE:
      state.map(tweet=>{
        if(tweet.id==action.tweet.id)
        {
          return Object.assign({},tweet,{isliked:true,likesNum:(tweet.likesNum+1)})
        }
      })
      return state
    case UPDATE_LIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},{isliked:true,likesNum:(tweet.likesNum+1)})
        }
      })
      return state
    case UPDATE_UNLIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},tweet,{isliked:true,likesNum:(tweet.likesNum-1)})
        }
      })
      return state
    case DELETE_TWEET_CASE:
      return state.filter(item => (item.id != action.tweetId))
    default:
      return state
  }
}

export default tweetsReducer