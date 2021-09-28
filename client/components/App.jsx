import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Landing from './home/landing/Landing'
import Home from './home/Home'
import Logout from './home/Logout'

import CardTestEnvironment from './cards/CardTestEnvironment'
import LoginTrueForm from './home/landing/LoginTrueForm'
import LoginForm from './home/landing/LoginForm'

import { retrieveCommentsTHUNK } from '../actions/commentsAction'
import { getFollowersOfUserTHUNK } from '../actions/followersActions'
import { getWhoUserIsFollowingTHUNK } from '../actions/followingActions'
import { retrieveAUsersTweetsTHUNK } from '../actions/tweetsActions'
import { getAUsersDetailsTHUNK } from '../actions/userActions'
import { resetAppTHUNK } from '../actions/RESET_APP'

import { checkAuth } from '../actions/authActions'

function App ({ auth, user, dispatch }) {
  useEffect(() => {
    const confirmSuccess = () => {
    }
    dispatch(checkAuth(confirmSuccess))
    console.log('checking auth')
  }, [])

  useEffect(() => {
    if (auth.isAuthenticated === true) {
      console.log('dispatch', auth.isAuthenticated)
      const id = user.id
      allFunc(id)
    }
  }, [auth])

  const allFunc = id => {
    console.log('running all func')
    if (id) {
      dispatch(getFollowersOfUserTHUNK(id))
      dispatch(retrieveCommentsTHUNK(id))
      dispatch(getWhoUserIsFollowingTHUNK(id))
      dispatch(getAUsersDetailsTHUNK(id))
      dispatch(retrieveAUsersTweetsTHUNK(id))
    }
  }

  return (
    <>
      {/* <LoginForm /> */}
      {/* <Landing /> */}

      {/* <Home /> */}
      {/* <Logout /> */}

      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route exact path="/logout" component={Logout} />
      {/* <Route path='/home/profile' component={Profile} /> */}

      {/* <CardTestEnvironment /> */}
    </>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth, user: state.auth.user }
}

export default connect(mapStateToProps)(App)
