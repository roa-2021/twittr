import React from 'react'
import { Link } from 'react-router-dom'
import { removeFollowing } from '../../actions/followUserAction'
import { connect } from 'react-redux'

const ConfirmationUnfollowUserCard = ({ toggleUnfollowCardVis, followers, following, dispatch }) => {

  const unfollow = (followersID, followingID) => {
    //dispatch the unfollow
   dispatch(removeFollowing(followersID,followingID))
   toggleUnfollowCardVis(!toggleUnfollowCardVis[0],following)
   

  }

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
      <Link to="/">
        <div onClick={() => unfollow(followers, following)} className="popup-card-container__dark-button">
          <span>Unfollow</span>
        </div>
      </Link>
        <div className="popup-card-container__light-button" onClick={toggleUnfollowCardVis}>
          <span>Cancel</span>
        </div>
    </div>
  )
}

export default connect()(ConfirmationUnfollowUserCard)
