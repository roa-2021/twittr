import React from 'react'

import profilePic from '../../../styles/default-profile.png'

import Logo from './Logo'
import Links from './Links'
import Tweet from './Tweet'
import Badge from './Badge'

const NavDock = () => {
  return (
    <section className="nav-panel">
      <div className='nav-container'>
        <div className='nav-content'>
          {/* LOGO */}
          <Logo />
          {/* ANCHOR TABS / BUTTONS */}
          <Links />
          {/* TWEET */}
          <Tweet />
        </div>
        {/* PROFILE BADGE */}
        <Badge profilePic={profilePic}/>
      </div>
    </section>
  )
}

export default NavDock
