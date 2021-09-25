const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.post('/', (req,res)=>{
  tweet=req.body
  db.creatTweet(tweet)
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

router.delete('/:id',(req,res)=>{
  tweetID=req.params.id;
  db.deleteTweet(tweetID)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

module.exports=router