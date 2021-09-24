import request from "superagent"

export const getUser = followerID => {
  return request
    .get(`/api/v1/followers/${followerID}`)
    .then(res => res.body)
}
