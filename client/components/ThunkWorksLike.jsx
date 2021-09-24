import React from 'react'
import { connect } from 'react-redux'

import { createUser, getUserDetails, updateUser } from '../actions/userActions'
import { createTweet, retrieveUserTweets, removeTweet } from '../actions/tweetsActions'
import { retrieveFollowers } from '../actions/followersActions'
import { getUserFollowing, addUserFollowing, deleteAFollowing } from '../actions/followingActions'

function App ({ dispatch }) {
  // USERS_THUNK TESTING
  const userIdUSERS =  1
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
  const userIDTWEET = 3
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

  // FOLLOWER/FOLLOWING_THUNK TESTING
  const aFollowersID = 3

  const getGetFollowersForUser = followerID => {
    dispatch(retrieveFollowers(followerID))
  }

  const getWhoUserIsFollowing = userID => {
    dispatch(getUserFollowing(userID))
  }

  const deleteUserFollowing = (userID, followingID) => {
    dispatch(deleteAFollowing(userID, followingID))
  }

  const followANewUser = (userID, followingID) => {
    console.log('App.jsx ' + followingID)
    dispatch(addUserFollowing(userID, followingID))
  }

  const userIDFOLLOW = 4
  const newFollowing = 1220

  const addFollowingObj = {
    userIDFOLLOW,
    followingID: 1
  }

  const deleteFollowingObj = {
    userIDFOLLOW,
    followingID: 1
  }
  // FOLLOWER/FOLLOWING_THUNK TESTING
  

  return (
    <>
      {/* user thunks */}
      <button onClick={() => createUserYo(newUser)}>CREATE USER</button>
      <button onClick={() => requestSpecificUserYo(userIdUSERS)}>REQ SPECF USER</button>
      <button onClick={() => updateSpecificUser(updatedUser)}>UPDATE USER DETAILS</button>

      {/* tweet thunks */}
      <button onClick={() => createATweet(tweet)}>CREATE TWEET</button>
      <button onClick={() => retrieveTweets(userIDTWEET)}>RETRIEVE USERS TWEETS</button>
      <button onClick={() => deleteTweet(tweetDeleteID)}>REMOVE TWEET</button>

      {/* followers/following thunks */}
      <button onClick={() => getGetFollowersForUser(aFollowersID)}>getGetFollowersForUser</button>
      <button onClick={() => getWhoUserIsFollowing(userIDFOLLOW)}>Get who user is following</button>
      <button onClick={() => followANewUser(addFollowingObj.userIDFOLLOW, addFollowingObj.followingID)}>Follow a new user</button>
      <button onClick={() => deleteUserFollowing(deleteFollowingObj.userIDFOLLOW, deleteFollowingObj.followingID)}>deleteUserFollowing</button>
    </>
  )
}

export default connect()(App)
