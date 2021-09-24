import React from 'react'
import { connect } from 'react-redux'

// USERSREDUCER
import { createUser, getUserDetails, updateUser } from '../actions/userActions'
// TWEETSREDUCER
import { createTweet, retrieveUserTweets, removeTweet } from '../actions/tweetsActions'
// FOLLOWERSREDUCER
import { retrieveFollowers } from '../actions/followersActions'
// FOLLOWINGREDUCER
import { getWhoUserIsFollowingTHUNK, userWantsToFollowTHUNK, userWantsToUnfollowTHUNK } from '../actions/followingActions'
// COMMENTSREDUCER
import { retrieveCommentsTHUNK, createCommentsTHUNK } from '../actions/commentsAction'

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
    dispatch(getWhoUserIsFollowingTHUNK(userID))
  }

  const deleteUserFollowing = (userID, followingID) => {
    dispatch(userWantsToUnfollowTHUNK(userID, followingID))
  }

  const followANewUser = (userID, followingID) => {
    console.log('App.jsx ' + followingID)
    dispatch(userWantsToFollowTHUNK(userID, followingID))
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

  // COMMENTS_THUNK TESTING
  const tweetID = 2 // has 2 comments
  const newComment = {
    publisher: 1, 
    tweet_id: 1, 
    publish_date: '06-06-2069 00:00:00', 
    content: 'MAN THATS SHIT! Love Lil Wayne'
  }

  const getSomeTweetComments = tweetID => {
    dispatch(retrieveCommentsTHUNK(tweetID))
  } 
  const createAComment = newComment => {
    dispatch(createCommentsTHUNK(newComment))
  }
  // COMMENTS_THUNK TESTING

  return (
    <>
      {/* USER THUNKS BUTTONS */}
      <h1 style={{color: "white"}}>SOME TEXT TO SEPARATE SOME THINGS</h1>
      <button onClick={() => createUserYo(newUser)}>CREATE USER</button>
      <button onClick={() => requestSpecificUserYo(userIdUSERS)}>REQ SPECF USER</button>
      <button onClick={() => updateSpecificUser(updatedUser)}>UPDATE USER DETAILS</button>

      {/* TWEET THUNKS BUTTONS */}
      <h1 style={{color: "white"}}>SOME TEXT TO SEPARATE SOME THINGS</h1>
      <button onClick={() => createATweet(tweet)}>CREATE TWEET</button>
      <button onClick={() => retrieveTweets(userIDTWEET)}>RETRIEVE USERS TWEETS</button>
      <button onClick={() => deleteTweet(tweetDeleteID)}>REMOVE TWEET</button>

      {/* FOLLOWERS THUNKS BUTTONS */}
      <h1 style={{color: "white"}}>SOME TEXT TO SEPARATE SOME THINGS</h1>
      <button onClick={() => getGetFollowersForUser(aFollowersID)}>GETGETFOLLOWERSFORUSER</button>

      {/* FOLLOWING THUNKS BUTTONS */}
      <h1 style={{color: "white"}}>SOME TEXT TO SEPARATE SOME THINGS</h1>
      <button onClick={() => getWhoUserIsFollowing(userIDFOLLOW)}>GET WHO USER IS FOLLOWING</button>
      <button onClick={() => followANewUser(addFollowingObj.userIDFOLLOW, addFollowingObj.followingID)}>FOLLOW A NEW USER</button>
      <button onClick={() => deleteUserFollowing(deleteFollowingObj.userIDFOLLOW, deleteFollowingObj.followingID)}>DELETEUSERFOLLOWING</button>

      {/* COMMENTS THUNKS BUTTONS */}
      <h1 style={{color: "white"}}>SOME TEXT TO SEPARATE SOME THINGS</h1>
      <button onClick={() => getSomeTweetComments(tweetID)}>GET COMMENTS</button>
      <button onClick={() => createAComment(newComment)}>CREATE COMMENT</button>
    </>
  )
}

export default connect()(App)
