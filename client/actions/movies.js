import { addMovieAPI, getAllMoviesAPI, updateMovieWatchedAPI } from '../apis/movies-api'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
export const MOVIE_WATCHED = 'MOVIE_WATCHED'

// Creators

function saveAllMovies (movies) {
  return {
    type: SAVE_ALL_MOVIES,
    movies
  }
}

function saveOneMovie (movie) {
  return {
    type: SAVE_ONE_MOVIE,
    movie
  }
}

function movieWatched (movieId) {
  return {
    type: MOVIE_WATCHED,
    movieId
  }
}

// Thunks

export function getAllMoviesThunk () {
  return (dispatch) => {
    getAllMoviesAPI()
      .then(movies => {
        dispatch(saveAllMovies(movies))
        return null
      })
      .catch(err => {
        return err.message
      })
  }
}

export function movieWatchedThunk (movieId) {
  return (dispatch) => {
    updateMovieWatchedAPI(movieId)
      .then((everythingIsFine) => {
        if (!everythingIsFine) {
          throw new Error('oops')
        }

        dispatch(movieWatched(movieId))
        return null
      })
      .catch(err => err.message)
  }
}

export function addMovieThunk (id, title) {
  return (dispatch) => {
    const newMovie = {
      imdb_id: id,
      title
    }

    addMovieAPI(newMovie)
      .then((movieObj) => {
        const { newId } = movieObj
        newMovie.id = newId
        newMovie.movieWatched = false

        dispatch(saveOneMovie(newMovie))

        return null
      })
      .catch(err => err.message)
  }
}
