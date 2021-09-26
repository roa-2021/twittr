import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './home/landing/Landing'
import Home from './home/Home'
import Logout from './home/Logout'
import {connect} from 'react-redux'

import CardTestEnvironment from './cards/CardTestEnvironment'
import LoginTrueForm from './home/landing/LoginTrueForm'
import LoginForm from './home/landing/LoginForm'

function App (props) {
  return (
    <>
      <LoginForm />
      {/* <Landing /> */}
      {/* <Home /> */}
      {/* <Logout /> */}

      {/* <CardTestEnvironment /> */}
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={Home}/>
    </>
  )
}

const mapStateToProps=(state)=>{
  return {auth:state.auth,
          user:state.auth.user
  }
}

export default connect(mapStateToProps)(App)
