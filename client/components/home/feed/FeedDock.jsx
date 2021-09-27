import React from 'react'
import { Route } from 'react-router-dom'

import Tweet from './Tweet'
import Wtf from './Wtf'
import PostTweet from './PostTweet'
import HomeHeader from './HomeHeader'
import Profile from './Profile'

const FeedDock = () => {


  return (
    <>
      <section className="feed-panel">
        <Route path='/home/profile' component={Profile} />
        {/* <Profile /> */}
        <Route exact path='/home' component={HomeHeader} />
        <Route exact path='/home' component={PostTweet} />
        <Route path='/home' component={Tweet} />
        {/* <Wtf /> */}
      </section>
    </>
  )
}

export default FeedDock
