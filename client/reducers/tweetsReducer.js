import { STORE_TWEETS_CASE,ADD_LIKE,UPDATE_UNLIKE,UPDATE_LIKE } from '../actions/tweetsActions'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_TWEETS_CASE:
      return [...action.tweet, ...state]
    case ADD_LIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},tweet,{like:tweet.id+1})
        }
      })
      return state
    case UPDATE_LIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},tweet,{like:tweet.id+1})
        }
      })
      return state
    case UPDATE_UNLIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},tweet,{like:tweet.id-1})
        }
      })
      return state
    default:
      return state
  }
}

export default tweetsReducer