import React from 'react'

import Home from './links-components/Home'
import Explore from './links-components/Explore'
import Notifications from './links-components/Notifications'
import Messages from './links-components/Messages'
import Bookmarks from './links-components/Bookmarks'
import Lists from './links-components/Lists'
import Profile from './links-components/Profile'
import More from './links-components/More'

const Links = () => {
  return (
    <div>
      <nav className="link-button-container">
        <Home />
        <Explore />
        <Notifications />
        <Messages />
        <Bookmarks />
        <Lists />
        <Profile />
        <More />
      </nav>
    </div>
  )
}

export default Links
