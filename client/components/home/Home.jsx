import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import FeedDock from './feed/FeedDock'
import NavDock from './nav/NavDock'
import SideDock from './side/SideDock'

import { retrieveCommentsTHUNK } from '../../actions/commentsAction'
import { getFollowersOfUserTHUNK } from '../../actions/followersActions'
import { getWhoUserIsFollowingTHUNK } from '../../actions/followingActions'
import { retrieveAUsersTweetsTHUNK } from '../../actions/tweetsActions'
import { getAUsersDetailsTHUNK } from '../../actions/userActions'

const Home = ({ dispatch, user }) => {
  const id = user.id
  
  if(user.id){
    dispatch(getFollowersOfUserTHUNK(id))
    dispatch(retrieveCommentsTHUNK(id))
    dispatch(getWhoUserIsFollowingTHUNK(id))
    dispatch(getAUsersDetailsTHUNK(id))
    dispatch(retrieveAUsersTweetsTHUNK(id))
  }
  

  return (
    <div className="wall-container">
      <NavDock />
      <FeedDock />
      <SideDock />
    </div>
  )
}
const mapStateToProps = store => {
  return {
    user: store.auth.user
  }
}

export default connect(mapStateToProps)(Home)
