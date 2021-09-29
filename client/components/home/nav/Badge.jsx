import React, {useState} from 'react'
import { connect } from 'react-redux'

import BadgeCard from '../../cards/BadgeCard'

import profileImage from '../../../styles/default-profile.png';

const Badge = ({ user }) => {
  const {profile_image} = user
  const [popupVisibility, setPopupVisibility] = useState(false)

  function togglePopupVis () {
    setPopupVisibility (!popupVisibility)
  }

  const getImg = () => {
    if (profile_image) {
      return profile_image
    } else {
      return profileImage
    }
  }

  return (
    <div>
      <div className="nav-profile-badge-container" onClick={togglePopupVis}>
        <div className="nav-profile-badge-content">
          <div>
            {' '}
            {/* profile icon */}
            <div className="nav-profile-badge_profile-img-container">
              <img src={getImg()} />
            </div>
          </div>
          <div className="nav-profile-badge_tag-container">
            {' '}
            {/* name and handle */}
            <div className="nav-profile-badge_tag-content">
              <div className="nav-profile-badge_name-tag-container">
                <p>
                  {user.name} {/* to be req from server */}
                </p>
              </div>
              <div className="nav-profile-badge_handle-tag-container">
                <p>
                  @{user.username} {/* to be req from server */}
                </p>
              </div>
            </div>
          </div>
          <div>
            {' '}
            {/* more svg */}
            <div className="nav-profile-badge_svg-container">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="
    r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
  "
              >
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {
        popupVisibility && <BadgeCard />
      }
    </div>
  )
}
function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}
export default connect(mapStateToProps)(Badge)
