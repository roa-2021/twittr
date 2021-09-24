import request from "superagent"

// server.use('/api/v1/tweets',tweetsRoute)

export const addTweet = tweet => {
  return request
    .post('/api/v1/tweets')
    .send(tweet)
    .then(res => res.body)
}

export const getTweet = id => {
  return request
    .get(`/api/v1/tweets/${id}`)
    .then(res => res.body)
}

export const deleteTweet = id => {
  return request
      .del(`/api/v1/tweets/${id}`)
      .then(res => res.body)
}