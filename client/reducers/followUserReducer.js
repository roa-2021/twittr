import { FOLLOW_USER_CASE } from '../actions/followUserAction'
import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const followUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_APP:
            return initialState
        case FOLLOW_USER_CASE:
            // console.log(action.followers, action.following)
            return [action.followers, action.following]            
        default:
            return state
    }
}

export default followUserReducer