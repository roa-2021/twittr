import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from '../home/Authenticated'

import { resetAppTHUNK } from '../../actions/RESET_APP'

const LogoutCard = ({ dispatch, history }) => {
  const handleLogout = () => {
    dispatch(resetAppTHUNK())
    dispatch(logOff())
    
  }

  return (
    <div className="popup-card-container">
      <div className="logout-logo-svg">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className=" r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
      </div>
      <div className="popup-card-container__header-text-container">
        <span>Log out of Twitter?</span>
      </div>
      <div className="popup-card-container__paragraph-text-container">
        <span>
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.
        </span>
      </div>
      <IfAuthenticated>
        <Link to="/">
          <div className="popup-card-container__dark-button" onClick={handleLogout}>
            <span>Log out</span>
          </div>
        </Link>
      </IfAuthenticated>
      <Link to="/">
        <div className="popup-card-container__light-button">
          <span>Cancel</span>
        </div>
      </Link>
    </div>
  )
}

export default connect()(LogoutCard)
