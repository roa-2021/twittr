import { createComment, getComments } from '../apis/commentsAPI'

// ---- CASE ----
export const RECEIVE_COMMENTS = 'RECEIVED_COMMENTS'
export const RECEIVE_NEW_COMMENT = 'RECEIVED_NEW_COMMENT'

// ---- ACTION ----
export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}
export const receiveNewComment = newComment => {
  return {
    type: RECEIVE_NEW_COMMENT,
    newComment
  }
}

// ---- ACTION ----
export const retrieveComments = tweetID => {
  return dispatch => {
    getComments(tweetID)
      .then(comments => {
        dispatch(receiveComments(comments))
      })
      // .catch(err => console.log(err))
  }
}

export const createComments = commentObj => {
  return dispatch => {
    createComment(commentObj)
      .then(newCommentID => {
        const fullyFormedCommentSan = {
          id: newCommentID[0],
          ...commentObj
        }
        dispatch(receiveNewComment(fullyFormedCommentSan))
      })
      // .catch(err => console.log(err))
  }
}