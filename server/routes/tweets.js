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

router.get('/like', (req,res)=>{
  tweet=req.body
  db.likeRowExist(tweet)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/like', (req,res)=>{
  tweet=req.body
  db.likeInsert(tweet)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.patch('/like', (req,res)=>{
  tweet=req.body
  db.likeUpdate(tweet)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.patch('/unlike', (req,res)=>{
  tweet=req.body
  db.unlikeUpdate(tweet)
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
                return db.isLiked(tweet.id,userID)
                .then(liked=>{
                  tweet.likesNum=likes[0].likesNum
                  tweet.isliked =liked[0].isliked
                  return tweet
              })    

       })
    })
    Promise.all(promises).then((tweets)=>{

    res.json(tweets)})
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