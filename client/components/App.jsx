import React, {useEffect} from 'react'
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
import {checkAuth} from '../actions/authActions'

function App ({ auth, user, dispatch }) {

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  useEffect(() => {
    const id = user.id
    allFunc(id)
  }, [auth.isAuthenticated])

  const allFunc = id => {
    if(id){
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

      {/*<CardTestEnvironment />*/}
    </>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth, user: state.auth.user }
}

export default connect(mapStateToProps)(App)
