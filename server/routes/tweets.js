const express = require('express')
const db = require('../db/db')
const router = express.Router()

// /api/v1/following

router.post('/', (req,res)=>{
  tweet=req.body
  db.createTweet(tweet)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/:id',(req,res)=>{
  userID=req.params.id;
  db.getTweets(userID)
  .then(tweets=>{
    res.json(tweets)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/following/:id', (req, res) => {
  const userID = req.params.id
  
  let output = []
  db.getTweets(userID)
    .then(usersTweets => output.push(...usersTweets))
  db.getFollowing(userID)
    .then(followingArr => {
        var promises = followingArr.map(personBeingFollowed => {
          return db.getTweets(personBeingFollowed.id)
            .then(personsTweets => {
              output.push(...personsTweets)
              return output
            })
          })
          Promise.all(promises).then(() => res.json(output))
        })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/:id',(req,res)=>{
  tweetID=req.params.id;
  db.deleteTweet(tweetID)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

module.exports=router