import React, { useState } from 'react'
import { connect } from 'react-redux'

import { searchIMDB } from '../apis/imdb'
import { addMovieThunk } from '../actions/movies'

function AddMovie (props) {
  const { dispatch } = props

  const [formVis, setFormVis] = useState(true)
  const [newMovieSearch, setNewMovieSearch] = useState('')
  const [newMoviesResults, setNewMovieResults] = useState([])

  const toggleForm = () => {
    setFormVis(!formVis)
  }

  const handleTyping = (evt) => {
    setNewMovieSearch(evt.target.value)
    console.log(newMovieSearch)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    searchIMDB(newMovieSearch)
      .then(imdbData => {
        setNewMovieResults(imdbData)
        return null
      })
      .catch(err => err.message)
  }

  const saveMovie = (movie) => {
    const { id, title } = movie
    dispatch(addMovieThunk(id, title))
  }

  const renderForm = () => {
    return <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Search for movie: </label>
      <input type='text' id='title' onChange={handleTyping} />
      <button>Search!</button>
    </form>
  }

  const renderList = () => {
    return <div>
      {newMoviesResults.map(movie => {
        return (
          <div key={movie.id}>
            <p>{movie.title} {movie.description}</p>
            <button onClick={() => saveMovie(movie)}>Save movie!</button>
            <img className='results-img' src={movie.image} />
          </div>
        )
      })}
    </div>
  }

  return (
    <>
      <h3>AddMovie</h3>
      {formVis
        ? <>
          <button onClick={toggleForm}>Hide Form</button>
          {renderForm()}
          {renderList()}
        </>
        : <button onClick={toggleForm}>Add Movie</button>}
    </>
  )
}

export default connect()(AddMovie)
