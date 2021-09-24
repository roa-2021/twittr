import { createCommentAPI, getCommentsAPI } from '../apis/commentsAPI'

// ---- CASE ----
export const STORE_COMMENTS_CASE = 'NEW_STORED_COMMENTS'
export const STORE_NEW_COMMENT_CASE = 'NEW_STORED_NEW_COMMENT'

// ---- ACTION ----
export const storeCommentsACTION = comments => {
  return {
    type: STORE_COMMENTS_CASE,
    comments
  }
}
export const storeNewCommentACTION = newComment => {
  return {
    type: STORE_NEW_COMMENT_CASE,
    newComment
  }
}

// ---- THUNK ----
export const retrieveCommentsTHUNK = tweetID => {
  return dispatch => {
    getCommentsAPI(tweetID)
      .then(comments => {
        dispatch(storeCommentsACTION(comments))
      })
      // .catch(err => console.log(err))
  }
}

export const createCommentsTHUNK = commentObj => {
  return dispatch => {
    createCommentAPI(commentObj)
      .then(newCommentID => {
        const fullyFormedCommentSan = {
          id: newCommentID[0],
          ...commentObj
        }
        dispatch(storeNewCommentACTION(fullyFormedCommentSan))
      })
      // .catch(err => console.log(err))
  }
}