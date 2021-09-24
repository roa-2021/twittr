import React, { Link } from 'react'
import ImagePanel from './ImagePanel'
import LoginPanel from './LoginPanel'
import FooterPanel from './FooterPanel'
import LoginForm from './LoginForm'

const Landing = () => {
  return (
    <>
      <div className="landing-login-container">
        <div className="landing-container">
          <LoginForm />
          {/* <ImagePanel /> */}
          {/* <LoginPanel /> */}
        </div>
        {/* <FooterPanel /> */}
      </div>
    </>
  )
}

export default Landing
