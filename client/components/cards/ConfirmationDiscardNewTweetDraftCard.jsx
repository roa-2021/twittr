import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmationDiscardNewTweetDraftCard = () => {
  return (
    <div className="popup-card-container">
      <div className="popup-card-container__header-text-container">
        <span>Discard Tweet?</span>
      </div>
      <div className="popup-card-container__paragraph-text-container">
        <span>
          This can't be undone and you'll lose your draft.
        </span>
      </div>
      <Link to="/home">
        <div className="popup-card-container__red-button">
          <span>Discard</span>
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

export default ConfirmationDiscardNewTweetDraftCard
