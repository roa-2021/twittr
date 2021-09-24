import React from 'react'
import { connect } from 'react-redux'

import { createUser, getUserDetails, updateUser } from '../actions/userActions'
import { createTweet, retrieveUserTweets, removeTweet } from '../actions/tweetsActions'

function App ({ dispatch }) {
  // USERS_THUNK TESTING
  const userId =  1
  const newUser = {
    name: 'Yo Maaaama',
    nickname:'babyboo123',
    email: 'babyboo123@twitter.com',
    password: 'babyboo123',
    profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
    varified: 'true',
    bio: 'this is a lazy guy, didnt type anything in it',
    age: '74'
  }
  const updatedUser = {
    id: 10, 
    name: 'Another mother',
    nickname:'Mothax',
    email: 'Mothax@twitter.com',
    password: '123456',
    profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
    varified: 'true',
    bio: 'this is a lazy guy, didnt type anything in it',
    age: '20'
  }

  const createUserYo = newUser => {
    dispatch(createUser(newUser)) // takes an obj of newUser (as above)
  }
  const requestSpecificUserYo = specificID => {
    dispatch(getUserDetails(specificID)) // takes an userID + gets details
  }
  const updateSpecificUser = updatedUser => {
    dispatch(updateUser(updatedUser)) // // takes obj of updatedUser (as above)
  }
  // USERS_THUNK TESTING

  // TWEETS_THUNK TESTING
  const tweet = {
    publisher: 5, 
    publish_time: '04-05-2021 00:00:00',
    content: 'This is a new bloody tweet made after lunch, feeling a little tired but coffee!!',
    like_count: 69,
    retweet_count: 6969,
    quote_count: 1000000
  }
  const userID = 3
  const tweetDeleteID = 6 

  const createATweet = tweet => {
    dispatch(createTweet(tweet)) // takes an obj of tweet (as above)
  }
  const retrieveTweets = userID => {
    dispatch(retrieveUserTweets(userID)) // takes userID + gets their tweets 
  }
  const deleteTweet = tweetID => {
    dispatch(removeTweet(tweetID)) // takes ID of tweet to del
  }
  // TWEETS_THUNK TESTING

  return (
    <>
      <button onClick={() => createUserYo(newUser)}>CREATE USER</button>
      <button onClick={() => requestSpecificUserYo(userId)}>REQ SPECF USER</button>
      <button onClick={() => updateSpecificUser(updatedUser)}>UPDATE USER DETAILS</button>

      <button onClick={() => createATweet(tweet)}>CREATE TWEET</button>
      <button onClick={() => retrieveTweets(userID)}>RETRIEVE USERS TWEETS</button>
      <button onClick={() => deleteTweet(tweetDeleteID)}>REMOVE TWEET</button>
    </>
  )
}

export default connect()(App)
