import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import profileImage from '../../../styles/default-profile.png'
import EditProfileCard from '../../cards/EditProfileCard'

const Profile = (props, tweet) => {
  // failsafe by pulling in store and render that user if userObj doesnt exist
  console.log(tweet)

  const userObj = props.location.userObj
  const { name, profile_image, username, bio, followingNum, followerNum } = userObj

  const [editProfileCardVis, setEditProfileCardVis] = useState(false)

  const toggleEditProfileCardVis = () => {
    setEditProfileCardVis(!editProfileCardVis)
  }

  return (
    <div className="feed-panel-container">
      {
        editProfileCardVis && 
        <div className="popup-card-overlay">
          <EditProfileCard toggleEditProfileCardVis={toggleEditProfileCardVis}/>
        </div>
        }
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-content">
            <div className="back-svg">
              <Link to='/'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="back">
                  <g>
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                  </g>
                </svg>
                </Link>
              </div>
            <div>
              <h2 className="profile-username">{name}</h2>
              <p className="tweet-count">{tweet.length}Tweets</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-banner"></div>
      <div className="profile-card-container">
        <div className="img-and-settings">
          <img src={profile_image ? profile_image : profileImage}></img>
          <button onClick={toggleEditProfileCardVis}>Set up profile</button>
        </div>
        <h1>{name}</h1>
        <p>@{username}</p>
        {/* Bio Div needed */}
        <p>{bio}</p>
        <div className="joined">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="calender">
            <g>
              <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
              <circle cx="7.032" cy="8.75" r="1.285"></circle>
              <circle cx="7.032" cy="13.156" r="1.285"></circle>
              <circle cx="16.968" cy="8.75" r="1.285"></circle>
              <circle cx="16.968" cy="13.156" r="1.285"></circle>
              <circle cx="12" cy="8.75" r="1.285"></circle>
              <circle cx="12" cy="13.156" r="1.285"></circle>
              <circle cx="7.032" cy="17.486" r="1.285"></circle>
              <circle cx="12" cy="17.486" r="1.285"></circle>
            </g>
          </svg>
          <p>Joined December 2020</p>
        </div>
        <div className="profile-follows">
          <Link to="/following">
            <p>
              <span>{followingNum} </span>
              Following
            </p>
          </Link>
          <Link to="/followers">
            <p>
              <span>{followerNum} </span>
              Followers
            </p>
          </Link>
        </div>
      </div>
      <div className="profile-menu-cont">
        <button>Tweet</button>
        <button>Tweets &amp; replies</button>
        <button>Media</button>
        <button>Likes</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return { tweet: state.tweet }
}

export default connect(mapStateToProps)(Profile)
