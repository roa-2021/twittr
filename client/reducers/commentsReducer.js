import { RECEIVE_COMMENTS, RECEIVE_NEW_COMMENT } from '../actions/commentsAction'

const initialState = []

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_COMMENTS:
          return action.comments
        case RECEIVE_NEW_COMMENT:
          return [...state, action.newComment]

        default:
            return state
    }
}

export default commentsReducer