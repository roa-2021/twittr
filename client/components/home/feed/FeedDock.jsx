import React from 'react'
import { Route } from 'react-router-dom'

import Tweet from './Tweet'
import Wtf from './Wtf'
import PostTweet from './PostTweet'
import HomeHeader from './HomeHeader'
import Profile from './Profile'
import Followers from './Followers'
import Following from './Following'

const FeedDock = () => {
  return (
    <>
      <section className="feed-panel">
        {/* <Profile /> */}
        <Route path='/home/followers' component={Followers} />
        <Route path='/home/following' component={Following} />
        <Route path='/home/profile' component={Profile} />
        <Route exact path='/home' component={HomeHeader} />
        <Route exact path='/home' component={PostTweet} />
        <Route exact path='/home' component={Tweet} />
        {/* <Wtf /> */}
      </section>
    </>
  )
}

export default FeedDock
