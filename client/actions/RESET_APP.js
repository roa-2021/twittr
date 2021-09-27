import { receiveLogout } from './authActions'

export const RESET_APP = 'LAUNCHING_THE_NUKES'

export const resetAppACTION = () => {
  return {
    type: RESET_APP,
  }
}

export const resetAppTHUNK = () => {
  return dispatch => {
    dispatch(resetAppACTION())
    dispatch(receiveLogout())
  }
}
