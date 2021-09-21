const connection = require('./connection')

function getAllMovies (db = connection) {
  return db('movies')
    .select()
}

function addMovie (newMovie, db = connection) {
  return db('movies')
    .insert(newMovie)
}

function updateMovie (id, newInfo, db = connection) {
  return db('movies')
    .update(newInfo)
    .where('id', id)
}

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie
}
