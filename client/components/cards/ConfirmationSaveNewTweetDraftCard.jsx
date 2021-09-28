import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmationSaveNewTweetDraftCard = () => {
  return (
    <div className="popup-card-container">
      <div className="popup-card-container__header-text-container">
        <span>Save Tweet?</span>
      </div>
      <div className="popup-card-container__paragraph-text-container">
        <span>
          You can save this to send later from your unsent Tweets. 
        </span>
      </div>
      <Link to="/">
        <div className="popup-card-container__dark-button">
          <span>Save</span>
        </div>
      </Link>
      <Link to="/">
        <div className="popup-card-container__light-button">
          <span>Discard</span>
        </div>
      </Link>
    </div>
  )
}

export default ConfirmationSaveNewTweetDraftCard
