const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/:id',(req,res)=>{
  userID=req.params.id
  db.getFollowing(userID)
  .then(following=>{
    res.json(following)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/:id', (req, res)=>{
  const userID=req.params.id;
  const newFollowID = req.body.followingId
  db.addFollowing(userID, newFollowID)
  .then(result=>{
      res.json(result)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/:id',(req,res)=>{
  const userID=req.params.id
  const deleteFollowID = req.body.followingId
  db.deleteFollowing(userID, deleteFollowID)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

module.exports=router