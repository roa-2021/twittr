import request from "superagent"

export const addUser = user => {
  return request
    .post('/api/v1/users')
    .send(user)
    .then(res => res.body)
}

export const getUser = id => {
  return request
    .get(`/api/v1/users/${id}`)
    .then(res => res.body)
}

export const updateUserDetails = newUser => {
  return request
      .patch(`/api/v1/users/${newUser.id}`)
      .send(newUser)
      .then(res => res.body)
}