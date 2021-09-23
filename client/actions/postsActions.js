import request from "superagent"

// ---- CASES ----
export const RECEIVE_POSTS = 'RECEIVED_POSTS'

// ---- ACTIONS ----
export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

// ---- THUNKS ----
// export const createPost = () => {
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

// export const getPost = () => {
//   return dispatch => {
//     return request
//       .get() // include :id in API call
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }

// export const getPosts = () => {
//   return dispatch => {
//     return request
//       .get() // this one is for all posts
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }

// export const deletePost = () => {
//   return dispatch => {
//     return request
//       .del() // pass postId?
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }