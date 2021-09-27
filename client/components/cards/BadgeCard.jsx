import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import profileImage from '../../styles/default-profile.png'
import { IfAuthenticated, IfNotAuthenticated } from '../home/Authenticated'

const BadgeCard = ({ user }) => {

  const { name, username, profile_image } = user

  return (
    <div className="badge-options-card-container">
      <div className="speech-bubble-container">
        <div className="user-badge-header">
          <div className="user-badge-header__img">
            <img src={profile_image ? profile_image : profileImage} />
          </div>
          <div className="user-badge-header-tags-status">
            <div className="user-badge-header-tags-container">
              <span className="user-badge-header__name-text">
                {name}
              </span>
              <span className="user-badge-header__handle-text">
                @{username}
              </span>
            </div>
            <div className="user-badge-header__status-svg">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-19u6a5r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path></g></svg>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="options-menu-container__button-container">
          <div className="options-menu-container__button-span">
            <span>Add an existing account</span>
          </div>
        </div>
        <IfAuthenticated>
          <Link to="/logout">
            <div className="options-menu-container__button-container">
              <div className="options-menu-container__button-span">
                <span>Log out&nbsp;</span>
                <span>@{username}</span>
              </div>
            </div>
          </Link>
        </IfAuthenticated>
      </div>
      {/* <div className="speech-tail-triangle">
        <div className="speech-tail-triangle__svg">
          <svg 
          viewBox="0 0 24 24" 
          aria-hidden="true" 
          class="r-9uu7rm r-jwli3a r-4qtqp9 r-yyyyoo r-1x9qfqz r-n6v787 r-1xvli5t r-dnmrzs r-u8s1d r-1plcrui r-uoibet r-lrvibr r-lrsllp" 
          // style="left: calc(138px);"
          >
            <g>
              <path 
                d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"
              ></path>
            </g>
          </svg>
        </div>
      </div> */}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(BadgeCard)
