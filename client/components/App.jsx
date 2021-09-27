import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Landing from './home/landing/Landing'
import Home from './home/Home'
import Logout from './home/Logout'

import CardTestEnvironment from './cards/CardTestEnvironment'
import LoginTrueForm from './home/landing/LoginTrueForm'
import LoginForm from './home/landing/LoginForm'

function App ({ dispatch }) {
  return (
    <>
      {/* <LoginForm /> */}
      {/* <Landing /> */}

      {/* <Home /> */}
      {/* <Logout /> */}

      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route exact path="/logout" component={Logout} />

      {/*<CardTestEnvironment />*/}
    </>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth, user: state.auth.user }
}

export default connect(mapStateToProps)(App)
