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

export const searchUsers = string => {
  return request
    .get(`/api/v1/users/like/${string}`)
    .then(res => res.body)
}

// export const getSomeUsers = stringObj => {
//   return request
//     .get('/api/v1/users')
//     .send(stringObj)
//     .then(res => res.body)
// }