import request from "superagent"

// server.use('/api/v1/tweets',tweetsRoute)

export const addATweetAPI = tweetObj => {
  return request
    .post('/api/v1/tweets')
    .send(tweetObj)
    .then(res => res.body)
}

export const getUsersTweetsAPI = userID => {
  return request
    .get(`/api/v1/tweets/${userID}`)
    .then(res => res.body)
}

export const deleteATweetAPI = tweetID => {
  return request
      .del(`/api/v1/tweets/${tweetID}`)
      .then(res => res.body)
}

export const addLikeAPI = tuID =>{
  return request
        .post('/api/v1/like')
        .send(tuID)
        .then(res=>res.body)
}


export const updateLikeAPI = tuID =>{
  return request
        .patch('/api/v1/like')
        .send(tuID)
        .then(res=>res.body)
}

export const updateUnLikeAPI = tuID =>{
  return request
        .patch('/api/v1/unlike')
        .send(tuID)
        .then(res=>res.body)
}

