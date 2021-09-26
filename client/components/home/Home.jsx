import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import FeedDock from './feed/FeedDock'
import NavDock from './nav/NavDock'
import SideDock from './side/SideDock'
<<<<<<< HEAD
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
||||||| parent of 7de8168 (load all stores when login)
// import Auth from '../../actions/authActions'
// import Comments from '../../actions/commentsAction'
// import Followers from '../../actions/FollowersAction'
// import Following from '../../actions/FollowingAction'
// import Tweets from '../../actions/TweetsAction'
// import user from '../../actions/userAction'

const Home = ({dispatch}) => {

=======
import Auth from '../../actions/authActions'
import {retrieveCommentsTHUNK} from '../../actions/commentsAction'
import {getFollowersOfUserTHUNK} from '../../actions/FollowersActions'
import {getWhoUserIsFollowingTHUNK} from '../../actions/FollowingActions'
import {retrieveAUsersTweetsTHUNK} from '../../actions/TweetsActions'
import {getAUsersDetailsTHUNK} from '../../actions/userActions'

const Home = ({dispatch,user}) => {
  var id=user.id;
  useEffect(()=>{
    dispatch(retrieveCommentsTHUNK(id))
    dispatch(getFollowersOfUserTHUNK(id))
    dispatch(retrieveCommentsTHUNK(id))
    dispatch(getWhoUserIsFollowingTHUNK(id))
    dispatch(getAUsersDetailsTHUNK(id))
    dispatch(retrieveAUsersTweetsTHUNK(id))
  },[])
>>>>>>> 7de8168 (load all stores when login)

  return (
    <div className="wall-container">
      <NavDock />
      <FeedDock />
      <SideDock />
    </div>
  )
}
const mapStateToProps = store => {return {user:store.auth.user}}
export default connect(mapStateToProps)(Home)
