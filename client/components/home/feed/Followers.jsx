import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import profileImage from '../../../styles/default-profile.png'

const Followers = ({ user, followers }) => {
  
  const [isFollowing, setFollowing] = useState(true)

  function toggleFollowingHover(e) {
    setFollowing(!isFollowing)
    if (isFollowing) {
      e.target.innerHTML = 'Unfollow'
    } else {
      e.target.innerHTML = 'Following'
    }
  }

  const loggedInUsersTo = {
    pathname: '/profile/',
    userObj: user
  }

  return (
    <div className="feed-panel-container">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-content">
            <div className="back-svg">
              <Link to={loggedInUsersTo}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="back">
                  <g>
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <Link to={loggedInUsersTo}>
              <h2 className="profile-username">{user.name}</h2>
              <p className="tweet-count">@{user.username}</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="follow-menu-cont">
      <button><Link to="/followers">Followers</Link></button>
      <button><Link to="/following">Following</Link></button>
      </div>

      {followers.map(user => {
        const newTo = {
          pathname: '/profile/',
          userObj: user
        }

        return (
          <div className="follower-container">
            <div className="follower-image">
              <img src={user.profile_image ? user.profile_image : profileImage}></img>
            </div>
            <div className="content">
              <div className="user-header">
                <div className="user">
                  <Link to={newTo}>
                    <h3>{user.name}</h3>
                    <p>@{user.username}</p>
                  </Link>
                </div>
                <div className="follow-button">
                {/* <button className="happening--card__following-button"  onMouseLeave={(e) => toggleFollowingHover(e)} onMouseEnter={(e) => toggleFollowingHover(e)}>Following</button> */}
                </div>
              </div>
              <div className="user-bio">
                <p>{user.bio}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
    followers: state.followers
  }
}

export default connect(mapStateToProps)(Followers)