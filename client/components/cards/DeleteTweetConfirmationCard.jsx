import React from 'react'
import { Link } from 'react-router-dom'


const DeleteTweetConfirmationCard = () => {
  return (
    <div className="popup-card-container">
      <div className="popup-card-container__header-text-container">
        <span>Delete Tweet?</span>
      </div>
      <div className="popup-card-container__paragraph-text-container">
        <span>
          This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results. 
        </span>
      </div>
      <Link to="/home">
        <div className="popup-card-container__red-button">
          <span>Delete</span>
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

export default DeleteTweetConfirmationCard
