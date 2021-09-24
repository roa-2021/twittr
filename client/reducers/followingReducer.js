import {RECEIVE_FOLLOWING} from '../actions/followingActions'

const initialState = []

const followingReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_FOLLOWING:
            return action.following
        default:
            return state
    }
}

export default followingReducer