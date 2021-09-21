// modules
import React from 'react'
import { connect } from 'react-redux'

// components
import AddMovie from './AddMovie'

// other functs we made
import { movieWatchedThunk } from '../actions/movies'

function Home (props) {
  const { movies, dispatch } = props

  const toWatch = movies.filter(movie => !movie.watched)
  const watched = movies.filter(movie => movie.watched)

  const clickHandler = (id) => {
    dispatch(movieWatchedThunk(id))
  }

  return (
    <>
      <h3>Home</h3>

      <p>To watch:</p>
      <ul>
        {toWatch.map(movie => {
          return (
            <li key={movie.id} >
              {/* {console.log(movie.title)} */}
              {movie.title}
              <button onClick={() => clickHandler(movie.id)}>Watched!</button>
            </li>
          )
        })}
      </ul>

      <AddMovie />

      <p>Watched:</p>
      <ul>
        {watched.map(movie => {
          return (
            <li key={movie.id}>
              {/* {console.log('hi')} */}
              {movie.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

function mapReduxToProps (globalState) {
  return {
    movies: globalState.moviesReducer
  }
}

export default connect(mapReduxToProps)(Home)
