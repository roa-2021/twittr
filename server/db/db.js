const db = require('./connection')

// users**********************************
function getUser(userID)
{
  return db('users')
  .where('id',userID)
}

function updateUser(userID,newUser)
{
  return db('users')
  .where('id',userID)
  .update(newUser)
}

//tweets*************************************
function getTweets(userID)
{
  return db('tweets')
  .where('publisher',userID)
}

function createTweet(tweet)
{
  return db('tweets')
  .insert(tweet)
}

function deleteTweet(tweetID)
{
  return db('tweets')
  .where('id',tweetID)
  .delete()
}

//follows
function getFollowingNum(userID)
{
  return db('follows')
  .count('following as followingNum')
  .where('followers',userID)
}

function getFollowerNum(userID)
{
  return db('follows')
  .count('followers as followerNum')
  .where('following',userID)
}

function getFollower(userID)
{
  return db('follows')
  .join('users','users.id','=','followers')
  .where('following',userID)
  .select('*')
}

function getFollowing(userID)
{
  return db('follows')
  .join('users','users.id','=','following')
  .where('followers',userID)
  .select('*')
}

function addFollowing(userID,followingID)
{
  return db('follows')
  .insert({followers:userID,following:followingID})
}

function deleteFollowing(userID,followingID)
{
  return db('follows')
  .where({
    followers:userID,
    following:followingID
  })
  .delete()
}

//comments*****************************************
function getComments(tweetID)
{
  return db('comments')
  .where('tweet_id',tweetID)
}

function createComment(comment)
{
  return db('comments')
  .insert(comment)
}

//export********************************************
module.exports = {
  getUser,
  updateUser,
  getTweets,
  createTweet,
  deleteTweet,
  getFollower,
  getFollowing,
  addFollowing,
  deleteFollowing,
  getComments,
  createComment,
  getFollowingNum,
  getFollowerNum,
}