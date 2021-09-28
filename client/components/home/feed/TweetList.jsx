import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// import meme from '../../../styles/meme.png'

import Tweet from './Tweet';

const TweetList = (props) => {
  const { tweets, user, following, switchLocation, theAuthor } = props


  let newTweets = [...tweets]
  // && user.id ==
  if (switchLocation && switchLocation === 'profile') {
    newTweets = tweets.filter(tweet => tweet.publisher == theAuthor.id)
  } else {
    newTweets
  }

  return (
    newTweets.map((tweet, i) => {
      return (
        <Tweet key={tweet.id} tweet={tweet} i={i} user={user} following={following}/>
      )
    })
  )
}

const mapStateToProps = store => {
  return {
    tweets: store.tweet,
    user: store.user,
    following: store.following
  }
}

export default connect(mapStateToProps)(TweetList)
