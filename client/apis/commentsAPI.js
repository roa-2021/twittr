import request from "superagent"

export const createCommentAPI = commentObj => {
  return request
    .post('/api/v1/comments')
    .send(commentObj)
    .then(res => res.body)
}

export const getCommentsAPI = tweetID => {
  return request
    .get(`/api/v1/comments/${tweetID}`)
    .then(res => res.body)
}
