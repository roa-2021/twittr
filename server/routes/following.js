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

router.post('/:id',(req,res)=>{
  userID=req.params.id;
  followingID = parseInt(req.body)
  db.addFollowing(userID,followingID)
  .then(result=>{
      res.json(result)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/:id',(req,res)=>{
  userID=req.params.id
  followingID = parseInt(req.body)
  db.deleteFollowing(userID,followingID)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

module.exports=router