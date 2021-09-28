import React from 'react'
import { Route } from 'react-router-dom'

import TweetList from './TweetList'
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
        <Route path='/followers' component={Followers} />
        <Route path='/following' component={Following} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={HomeHeader} />
        <Route exact path='/' component={PostTweet} />
        <Route exact path='/' component={TweetList} />
        {/* <Wtf /> */}
      </section>
    </>
  )
}

export default FeedDock
