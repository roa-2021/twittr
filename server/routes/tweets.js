const express = require('express')
const db = require('../db/db')
const router = express.Router()

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
      var promises = tweets.map(tweet=>{
         return db.getLikes(tweet.id)
          .then(likes=>{
            tweet.likesNum=likes[0].likesNum
              return tweet
       })
    })
    Promise.all(promises).then((tweets)=>
    res.json(tweets))
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

// function getAllByTweetID(tweetID)
// {
//   db.getTweetByID(tweetID)
//   .then(tweet=>{
//     db.getLikes(tweetID)
//     .then(likes=>{
//       tweet[0].likesNum=likes[0].likesNum
//       return tweet
//     })
//   })
// }

module.exports=router