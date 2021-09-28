import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EachTweet from './EachTweet';



const Tweet = ({ dispatch, tweets, user }) => {
  // const [Tweet,setTweet] = useState([])
  // console.log('hello')
  // useEffect(()=>{
  //   if(tweets)
  //   {
  //     setTweet(tweets)
  //   }
  // },[tweets])


  return (
  <>
    {tweets.map((tweet, i) => {
      <h1>hi</h1>
    })}
</>
  )
}

const mapStateToProps = store => {
  return {
    tweets: store.tweet,
    user: store.auth.user
  }
}

export default connect(mapStateToProps)(Tweet)
