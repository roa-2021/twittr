import React from 'react'
import Tweet from './Tweet'
import Wtf from './Wtf'
import PostTweet from './PostTweet'
import HomeHeader from './HomeHeader'

const Feed = () => {
  return (
    <>
      <section className="feed-panel">
        <HomeHeader />
        <PostTweet />
        <Tweet />
        <Wtf />
      </section>
    </>
  )
}

export default Feed
