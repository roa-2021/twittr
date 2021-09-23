import request from "superagent"
// ---- CASES ----
export const RECEIVE_USER = 'RECEIVED_USER_DETAILS'

// ---- ACTIONS ----
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user // obj with user details
  }
}

// ---- THUNKS ----
// export const createUser = () => {
//   return dispatch => {
//     return request
//       .post()
//       .send({})
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }

// export const getUser = () => {{
//   return dispatch => {
//     return request
//       .get() // include :id in API call
//       .then(res =>)
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }}

// export const updateUser = () => {
//   return dispatch => {{
//     return request
//       .patch()
//       .send({})
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }}
// }

