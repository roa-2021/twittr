import React from 'react'
import FeedDock from './feed/FeedDock'
import NavDock from './nav/NavDock'
import SideDock from './side/SideDock'
import Auth from '../../actions/authActions'
import Comments from '../../actions/commentsAction'
import Followers from '../../actions/FollowersAction'
import Following from '../../actions/FollowingAction'
import Tweets from '../../actions/TweetsAction'
import user from '../../actions/userAction'

const Home = ({dispatch}) => {
  useEffect(() => {
    dispatch
  }, [])

  return (
    <div className="wall-container">
      <NavDock />
      <FeedDock />
      <SideDock />
    </div>
  )
}

export default Home
