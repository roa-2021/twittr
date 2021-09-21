const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  // res.json({ worked: true })
  db.getAllMovies()
    .then(movies => {
      movies.forEach(movie => {
        movie.watched = Boolean(movie.watched)
      })
      res.json(movies)
      return null
    })
    .catch(err => {
      res.send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addMovie(req.body)
    .then(idArr => {
      res.json({ newId: idArr[0] })
      return null
    })
    .catch(err => err.message)
  // db func
  // then
  // res.json
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  db.updateMovie(id, req.body)
    .then((numOfUpdates) => {
      const itWorked = numOfUpdates === 1
      res.json({ itWorked })
      return null
    })
    .catch(err => err.message)
})

module.exports = router
