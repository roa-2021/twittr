import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// import meme from '../../../styles/meme.png'

import Tweet from './Tweet';

const TweetList = ({ dispatch, tweets, user }) => {



  return (
    tweets.map((tweet, i) => {
      return (
        <Tweet key={tweet.id} tweet={tweet} i={i} user={user}/>
      )
    })
  )
}

const mapStateToProps = store => {
  return {
    tweets: store.tweet,
    user: store.auth.user
  }
}

export default connect(mapStateToProps)(TweetList)
