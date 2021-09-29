import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// import meme from '../../../styles/meme.png'
import { addLikeTHUNK, deleteLikeTHUNK, updateLikeCountTHUNK, } from '../../../actions/tweetsActions';
import Tweet from './Tweet';

const TweetList = (props) => {
  const { dispatch, tweets, user, following, switchLocation, theAuthor } = props


  function likeTweet(tweet) {
    dispatch(updateLikeCountTHUNK(tweet))
  }

  


  let newTweets = [...tweets]
  // && user.id ==
  if (switchLocation && switchLocation === 'profile') {
    newTweets = tweets.filter(tweet => tweet.publisher == theAuthor.id)
  } else {
    newTweets
  }

  newTweets.sort((a, b) => {
    return b.id - a.id
  })


  return (
    newTweets.map((tweet, i) => {
      // console.log('before ', tweet.publish_time)
      tweet = { ...tweet}
      let convertDate = new Date (tweet.publish_time * 1000)
      tweet.publish_time = convertDate.toLocaleString()
      // console.log('after ', tweet.publish_time)
      return (
        <Tweet key={tweet.id} tweet={tweet} i={i} user={user} following={following} like={likeTweet} />
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
