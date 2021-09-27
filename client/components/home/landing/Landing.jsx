import React, { Link } from 'react'
import ImagePanel from './ImagePanel'
import LoginPanel from './LoginPanel'
import FooterPanel from './FooterPanel'

const Landing = () => {
  return (
    <>
      <div className="landing-login-container">
        <div className="landing-container">
          <ImagePanel />
          <LoginPanel />
        </div>
        <FooterPanel />
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default Landing
