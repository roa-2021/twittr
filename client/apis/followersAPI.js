import request from "superagent"

export const getUsersFollowersAPI = usersID => {
  return request
    .get(`/api/v1/followers/${usersID}`)
    .then(res => res.body)
}
