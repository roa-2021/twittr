import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// import meme from '../../../styles/meme.png'
import { addLikeTHUNK,deleteLikeTHUNK,updateLikeCountTHUNK } from '../../../actions/tweetsActions';
import Tweet from './Tweet';

const TweetList = ({ dispatch, tweets, user, following }) => {

  function likeTweet(tweet)
  {
    dispatch(updateLikeCountTHUNK(tweet))
    // console.log('tweetliked',tweet)
  }

  return (
    tweets.map((tweet, i) => {
      return (
        <Tweet key={tweet.id} tweet={tweet} i={i} user={user} following={following} like={likeTweet}/>
      )
    })
  )
}

const mapStateToProps = store => {
  return {
    tweets: store.tweet,
    user: store.auth.user,
    following: store.following
  }
}

export default connect(mapStateToProps)(TweetList)
