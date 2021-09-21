import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import MovieView from './MovieView'

import { getAllMoviesThunk } from '../actions/movies'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(getAllMoviesThunk())
  }, [])

  return (
    <>
      <h1>App</h1>
      <Route exact path='/' component={Home} />
      <Route path='/movie/:id' component={MovieView}/>
    </>
  )
}

export default connect()(App)
