import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EachTweet from './EachTweet'
import { addLikeTHUNK,updateLikeTHUNK,updateUnLikeTHUNK } from '../../../actions/tweetsActions'


const Tweet = ({ dispatch, tweets}) => {
  
  const Likefunc =(tweet)=>{
      if((tweet.isliked)&&(tweet.likeExist))
      {
        dispatch(updateUnLikeTHUNK({id:tweet.id,user_id:tweet.publisher}))
      }
      else if((tweet.isliked==0)&&(tweet.likeExist==1))
      {
        dispatch(updateLikeTHUNK({id:tweet.id,user_id:tweet.publisher}))
      }
      else if ((tweet.isliked==1)&&(tweet.likeExist==0))
      {
        dispatch(addLikeTHUNK({id:tweet.id,user_id:tweet.publisher}))
      }
      else{
        alert.message('error')
      }
  }
      const [Tweets,setTweets] = useState([])
      useEffect(()=>{
        if(tweets)
        {
         setTweets(tweets)
        }
      },[tweets])

    return (
    Tweets.map(tweet => {
      return (
        <>
        <EachTweet tweet={tweet} like={Likefunc}/>
        </>
      )
    })
  )
}

const mapStateToProps = store => {
  return {
    tweets: store.tweet, 
    user: store.auth.user
}}

export default connect(mapStateToProps)(Tweet)
