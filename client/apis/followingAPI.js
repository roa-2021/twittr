import request from "superagent";

export const getWhoUserIsFollowingAPI = userId => {
    return request
    .get(`/api/v1/following/${userId}`)
    .then(res => res.body)
}

export const userFollowAPI = (userId, followingId) => {
    return request
    .post(`/api/v1/following/${userId}`)
    .send({followingId})
    .then(res => res.body)
}

export const userUnfollowAPI = (userId, followingId) => {
    return request
        .del(`/api/v1/following/${userId}`)
        .send({followingId})
        .then(res => res.body)
}