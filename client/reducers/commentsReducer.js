import { STORE_COMMENTS_CASE, STORE_NEW_COMMENT_CASE } from '../actions/commentsAction'
import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
      case RESET_APP:
        return initialState
      case STORE_COMMENTS_CASE:
        return action.comments
      case STORE_NEW_COMMENT_CASE:
        return [...state, action.newComment]

        default:
            return state
    }
}

export default commentsReducer