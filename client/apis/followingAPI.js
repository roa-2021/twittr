import request from "superagent";

export const getFollowing = userId => {
    return request
    .get(`/api/v1/following/${userId}`)
    .then(res => res.body)
}

export const addFollowing = (userId, followingId) => {
    console.log('followingAPI.js + ' + followingId)
    return request
    .post(`/api/v1/following/${userId}`)
    .send({followingId})
    .then(res => res.body)
}

export const deleteFollowing = (userId, followingId) => {
    return request
        .del(`/api/v1/following/${userId}`)
        .send({followingId})
        .then(res => res.body)
}