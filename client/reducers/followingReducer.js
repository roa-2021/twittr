import { STORE_FOLLOWING_CASE } from '../actions/followingActions'

const initialState = []

const followingReducer = (state = initialState, action) => {
    switch(action.type) {
        case STORE_FOLLOWING_CASE:
            return action.following
        default:
            return state
    }
}

export default followingReducer