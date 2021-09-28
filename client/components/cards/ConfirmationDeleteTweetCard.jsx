import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { removeATweetByIDTHUNK } from '../../actions/tweetsActions'

import { resetAppTHUNK } from '../../actions/RESET_APP'

const ConfirmationDeleteTweetCard = ({ dispatch, i, toggleDel }) => {

  const deleteTweet = i => {
    console.log(i)
    dispatch(removeATweetByIDTHUNK(i))
    toggleDel()
  }

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
      <Link to="/">
      <div className="popup-card-container__red-button" onClick={() => deleteTweet(i)}>
      <span>Delete</span>
      </div>
      </Link>
      <div className="popup-card-container__light-button" onClick={toggleDel}>
      <span>Cancel</span>
      </div>
    </div>
  )
}

export default connect()(ConfirmationDeleteTweetCard)
