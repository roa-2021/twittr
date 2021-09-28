import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmationUnfollowUserCard = () => {
  return (
    <div className="popup-card-container">
      <div className="popup-card-container__header-text-container">
        <span>Unfollow&nbsp;</span>
        <span>@user</span>
      </div>
      <div className="popup-card-container__paragraph-text-container">
        <span>
        Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.
        </span>
      </div>
      <Link to="/home">
        <div className="popup-card-container__dark-button">
          <span>Unfollow</span>
        </div>
      </Link>
      <Link to="/home">
        <div className="popup-card-container__light-button">
          <span>Cancel</span>
        </div>
      </Link>
    </div>
  )
}

export default ConfirmationUnfollowUserCard
