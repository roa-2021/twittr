import { STORE_FOLLOWING_CASE } from '../actions/followingActions'
import { RESET_APP } from '../actions/RESET_APP'

const initialState = []

const followingReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_APP:
            return initialState
        case STORE_FOLLOWING_CASE:
            return action.following
        default:
            return state
    }
}

export default followingReducer