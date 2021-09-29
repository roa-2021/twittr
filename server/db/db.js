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

function getSomeUsers(stringObj)
{
  return db('users')
  .where('name','like','%'+stringObj.name+'%')
}

//tweets*************************************
function getTweets(userID)
{
  return db('tweets')
  .join('users','users.id','tweets.publisher')
  .where('publisher',userID)
  .select('tweets.id',
  'tweets.publisher',
  'tweets.publish_time',
  'tweets.content',
  'tweets.like_count',
  'tweets.quote_count',
  'tweets.retweet_count',
  'users.profile_image',
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
  .insert({
    publisher:tweet.publisher,
    publish_time:tweet.publish_time,
    content:tweet.content,
    like_count:tweet.like_count,
    quote_count:tweet.quote_count,
    retweet_count:tweet.retweet_count,
  })
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
  .del()
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
  .count('id as likesNum')
  .where(
  {tweet_id:tweetID,})
}

function isLiked(tweetID,userID)
{
  return db('like')
  .count('id as isliked')
  .where(
  {tweet_id:tweetID,
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


function likeDelete(tweet)
{
  return db('like')
  .where({
    tweet_id:tweet.id,
    user_id:tweet.user_id
  })
  .delete()
}

function updateLikeCount(tweet)
{
  const like_count=tweet.like_count+1
  return db('tweets')
  .where('id',tweet.id)
  .update('like_count',like_count)

}
//export********************************************
module.exports = {
  getUser,
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
  likeDelete,
  updateLikeCount,
  getSomeUsers,
}