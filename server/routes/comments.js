const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.post('/', (req, res) => {
    const comment = req.body
    db.createComment(comment)
    .then(newComment => {
        res.json(newComment)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/:id', (req, res) => {
    const tweetID = req.params.id
    db.getComments(tweetID)
    .then(comments => {
        res.json(comments)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router;
