const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/:id',(req,res)=>{
  userID=req.params.id
  db.getUser(userID)
  .then(user=>{
    res.json(user)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/',(req,res)=>{
  newUser=req.body
  db.creatUser(newUser)
  .then(result=>{
    res.json(result)
  })
  .catch(err => res.status(500).json({ message: err.message }))
})

router.patch('/:id',(req,res)=>{
  userID=req.params.id
  newUser=req.body
  db.updateUser(userID,newUser)
  .then(result=>{
      res.json(result)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})



module.exports=router