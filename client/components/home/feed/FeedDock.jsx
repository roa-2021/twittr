import React from 'react'
import Tweet from './Tweet'
import Wtf from './Wtf'
import PostTweet from './PostTweet'
import HomeHeader from './HomeHeader'
import Profile from './Profile'

const FeedDock = () => {


  return (
    <>
      <section className="feed-panel">
        <Profile />
        {/* <HomeHeader />
        <PostTweet /> */}
        <Tweet />
        <Wtf />
      </section>
    </>
  )
}

export default FeedDock
