import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addLikeTHUNK, deleteLikeTHUNK } from '../../../actions/tweetsActions';

// import meme from '../../../styles/meme.png'

import Tweet from './Tweet';

const TweetList = ({ dispatch, tweets, user, following }) => {

  function likeATweet(tweet)
  {
    if(tweet.isliked==0)
    {
        tweet.isliked = 1,
        tweet.likesNum +=1
        dispatch(addLikeTHUNK(tweet))
    }
    else if (tweet.isliked== 1)
    {
      tweet.isliked = 0,
      tweet.likesNum -=1
      dispatch(deleteLikeTHUNK(tweet))
    }
  }


  return (
    tweets.map((tweet, i) => {
      return (
        <Tweet key={tweet.id} tweet={tweet} i={i} user={user} following={following} like={likeATweet}/>
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
