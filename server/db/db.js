const db = require('./connection')

// users**********************************
function getUser(userID)
{
  return db('users')
  .where('id',userID)
}

function getUserNameByID(userID)
{
  return db('users')
  .where('id',userID)
  .select('name','username')
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
  .join('users','users.id','tweets.publisher')
  .where('publisher',userID)
  .select('tweets.id',
  'tweets.publisher',
  'tweets.content',
  'users.name',
  'users.username'
  )
}

function getTweetByID(tweetID)
{
  return db('tweets')
  .where('id',tweetID)
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

//like****************************************
function getLikes(tweetID)
{
  return db('like')
  .count('like as likesNum')
  .where(
  {tweet_id:tweetID,
    like:true
  })
}

function isLiked(tweetID,userID)
{
  return db('like')
  .count('like as isliked')
  .where(
  {tweet_id:tweetID,
    user_id:userID,
  })
}

function likeRowExist(tweetID,userID)
{
  return db('like')
  .count('like as likeExist')
  .where({tweet_id:tweetID,
    user_id:userID,
  })
}

function likeInsert(tweet)
{
  return db('like')
  .insert({
    tweet_id:tweet.id,
    user_id:tweet.user_id,
  })
}

function likeUpdate(tweet)
{
  return db('like')
  .update('like.like',true)
  .where(
    {
      tweet_id:tweet.id,
      user_id:tweet.user_id,
    }
  )
}

function unlikeUpdate(tweet)
{
  return db('like')
  .update('like.like',false)
  .where(
    {
      tweet_id:tweet.id,
      user_id:tweet.user_id,
    }
  )
}

//export********************************************
module.exports = {
  getUser,
  getUserNameByID,
  updateUser,
  getTweets,
  getTweetByID,
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
  getLikes,
  isLiked,
  likeInsert,
  likeUpdate,
  unlikeUpdate,
  likeRowExist,
}