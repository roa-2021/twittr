const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/:id',(req,res)=>{
  userID=req.params.id
  db.getFollower(userID)
  .then(followers=>{
    res.json(followers)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

module.exports=router