import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './home/landing/Landing'
import Home from './home/Home'

import Logout from './home/Logout'
import { connect } from 'react-redux'

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Logout /> */}

      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/logout" component={Logout} />
    </>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth, user: state.auth.user }
}

export default connect(mapStateToProps)(App)
