import request from 'superagent'

export function getAllMoviesAPI () {
  return request
    .get('/api/v1/movies')
    .then(response => response.body)
}

export function updateMovieWatchedAPI (id) {
  return request
    .patch('/api/v1/movies/' + id)
    .send({ watched: true })
    .then(response => response.body)
}

export function addMovieAPI (newMovie) {
  return request
    .post('/api/v1/movies')
    .send(newMovie)
    .then(response => response.body)
}
