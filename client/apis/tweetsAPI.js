import request from "superagent"

// server.use('/api/v1/tweets',tweetsRoute)

export const addTweet = tweetObj => {
  return request
    .post('/api/v1/tweets')
    .send(tweetObj)
    .then(res => res.body)
}

export const getTweet = userID => {
  return request
    .get(`/api/v1/tweets/${userID}`)
    .then(res => res.body)
}

export const deleteTweet = tweetID => {
  return request
      .del(`/api/v1/tweets/${tweetID}`)
      .then(res => res.body)
}