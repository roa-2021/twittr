import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import profileImage from '../../../styles/default-profile.png';

import {getAUsersDetailsTHUNK} from '../../../actions/userActions'

const Profile = ({dispatch, user}) => {

  const userId = 1;

  useEffect(() => {
    dispatch(getAUsersDetailsTHUNK(userId))
  }, [])

  return (
    <div className="feed-panel-container">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-content">
            <div className="back-svg">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="back">
                <g>
                  <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                  </path>
                </g>
              </svg>
            </div>
            <a href="#">
              <h2 className="profile-username">{user.name}</h2>
              <p className="tweet-count">6 Tweets</p>
            </a>
          </div>
        </div>
      </div>
      <div className="user-banner"></div>
      <div className="profile-card-container">
        <div className="img-and-settings">
          <img src={profileImage}></img>
          <button>Set up profile</button>
        </div>
        <h1>{user.name}</h1>
        <p>@{user.username}</p>
        {/* Bio Div needed */}
        <p>{user.bio}</p>
        <div className="joined">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="calender">
            <g>
              <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z">
              </path>
              <circle cx="7.032" cy="8.75" r="1.285">
              </circle>
              <circle cx="7.032" cy="13.156" r="1.285">
              </circle>
              <circle cx="16.968" cy="8.75" r="1.285">
              </circle>
              <circle cx="16.968" cy="13.156" r="1.285">
              </circle>
              <circle cx="12" cy="8.75" r="1.285">
              </circle>
              <circle cx="12" cy="13.156" r="1.285">
              </circle>
              <circle cx="7.032" cy="17.486" r="1.285">
              </circle>
              <circle cx="12" cy="17.486" r="1.285">
              </circle>
            </g>
          </svg>
          <p>Joined December 2020</p>
        </div>
        <div className="profile-follows">
          <p><span>{user.followingNum} </span>Following</p>
          <p><span>{user.followerNum} </span>Followers</p>
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

const mapStateToProps = store => ({user : store.user})

export default connect(mapStateToProps)(Profile)
