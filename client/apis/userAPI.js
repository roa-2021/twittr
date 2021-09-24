import request from "superagent"

export const addAUserAPI = userObj => {
  return request
    .post('/api/v1/users')
    .send(userObj)
    .then(res => res.body)
}

export const getAUserByIdAPI = usersId => {
  return request
    .get(`/api/v1/users/${usersId}`)
    .then(res => res.body)
}

export const updateAUsersDetailsAPI = usersNewDetailsObj => {
  return request
      .patch(`/api/v1/users/${usersNewDetailsObj.id}`)
      .send(usersNewDetailsObj)
      .then(res => res.body)
}