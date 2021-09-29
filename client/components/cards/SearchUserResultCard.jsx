import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { addFollowing, followUser } from '../../actions/followUserAction'
import { getAUsersFollowingTweetsTHUNK } from '../../actions/tweetsActions'
import { getAUsersDetailsTHUNK } from '../../actions/userActions'

import ConfirmationUnfollowUserCard from './ConfirmationUnfollowUserCard'

import profileImage from '../../styles/default-profile.png'


const SearchUserResultCard = (props) => {
  const {followers, following, dispatch, user, userResult} = props
  console.log(userResult)

  const [isFollowing, setFollowing] = useState(true)
  const [unfollowCardVis, setUnfollowCardVis] = useState([false, 0])

  function toggleUnfollowCardVis(followingID) {
    // HOW IS THIS REMOVING THE FOLLOW IN THE DB???
    setUnfollowCardVis([!unfollowCardVis[0], followingID])
    dispatch(getAUsersFollowingTweetsTHUNK(user.id))
    dispatch(getAUsersDetailsTHUNK(user.id))
  }

  function toggleFollowingHover(e) {
    setFollowing(!isFollowing)
    if (isFollowing) {
      e.target.innerHTML = 'Unfollow'
    } else {
      e.target.innerHTML = 'Following'
    }
  }

  const follow = id => { 
    console.log(userResult, id)
    dispatch(addFollowing(id, userResult.id))
    dispatch(getAUsersFollowingTweetsTHUNK(userResult.id))
    dispatch(getAUsersDetailsTHUNK(userResult.id))
  }


  const newTo = {
    pathname: '/profile/',
    userObj: user
  }
  return (
    <article className="happening--card">
      <div className="user-info--container">
        <img src={userResult.profile_image ? userResult.profile_image : profileImage}></img>
        <div className="happening--card__text-wrapper">
          {/* <a href=""> */}
            {/* <Link to={newTo}> */}
              <h3>{userResult.name}</h3>
            {/* </Link> */}
            {/* <Link to={newTo}> */}
              <p>@{userResult.username}</p>
            {/* </Link> */}
          {/* </a> */}
        </div>
      </div>

      {/* <button
        className="happening--card__follow-button"
        onClick={() => follow(user.id)}
        >
        Follow
      </button> */}
    </article>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,

    followers: state.followers,
    following: state.following
  }
}

export default connect(mapStateToProps)(SearchUserResultCard)
