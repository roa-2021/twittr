import { SAVE_ALL_MOVIES, MOVIE_WATCHED, SAVE_ONE_MOVIE } from '../actions/movies'

function moviesReducer (state = [], action) {
  switch (action.type) {
    case SAVE_ALL_MOVIES:
      return action.movies
    case SAVE_ONE_MOVIE:
      return [...state, action.movie]
    case MOVIE_WATCHED:
      return state.map(movie => {
        if (movie.id === action.movieId) {
          movie.watched = true
        }
        return movie
      })
    default:
      return state
  }
}

export default moviesReducer
