import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getSomeUsers} from '../../../apis/userAPI'
import { addFollowing, followUser } from '../../../actions/followUserAction'
import { getAUsersFollowingTweetsTHUNK } from '../../../actions/tweetsActions'
import { getAUsersDetailsTHUNK } from '../../../actions/userActions'
import { searchUserTHUNK } from '../../../actions/userActions'
import OptionsSideBarMoreCard from '../../cards/OptionsSideBarMoreCard'
import ConfirmationUnfollowUserCard from '../../cards/ConfirmationUnfollowUserCard'

import profileImage from '../../../styles/default-profile.png'
import authReducer from '../../../reducers/authReducer'

const SideDock = ({ followers, following, dispatch, user ,search, auth}) => {
  const [moreVisibilty, setMoreVisibilty] = useState(false)
  const [isFollowing, setFollowing] = useState(true)
  const [unfollowCardVis, setUnfollowCardVis] = useState([false, 0])


  useEffect(() => {
      if(search.length==0)
      {
        console.log('no result')
      }
      else
      {
        var followingIDs = following.map(user => user.id)
        followingIDs.push(auth.id)
        var searchResult = search.filter(user => !followingIDs.includes(user.id));
        if(searchResult.length==0)
        {
          console.log("no result")
        }
        else{
          console.log(searchResult)
        }
      }
    
  }, [search])

  function searchUser(e)
  {
    const  string = e.target.value
    dispatch(searchUserTHUNK(string))

      // getSomeUsers(string)
      // .then(res=>
      //   res.map(user=>{
      //     console.log(user)
      //   })
      //   )
  }

  function toggleUnfollowCardVis(followingID) {
    // HOW IS THIS REMOVING THE FOLLOW IN THE DB???
    setUnfollowCardVis([!unfollowCardVis[0], followingID])
    dispatch(getAUsersFollowingTweetsTHUNK(user.id))
    dispatch(getAUsersDetailsTHUNK(user.id))
  }

  function toggleFollowingHover(e) {
    setFollowing(!isFollowing)
    if (isFollowing) {
      e.target.innerHTML = 'Unfollow'
    } else {
      e.target.innerHTML = 'Following'
    }
  }
  function toggleMore() {
    setMoreVisibilty(!moreVisibilty)
  }

  // IS THIS NEEDED ANYMORE???
  // const unfollow = id => {
  //   console.log('unfollow user ', id)
  // }

  const follow = id => { 
    dispatch(addFollowing(user.id, id))
    dispatch(getAUsersFollowingTweetsTHUNK(user.id))
    dispatch(getAUsersDetailsTHUNK(user.id))
  }

  let displayList = followers.map(foo => {
    const searchResult = following.find(user => user.id == foo.id)
    if (searchResult) {
      return undefined
    } else {
      return foo
    }
  })

  displayList = displayList.filter(instance => typeof instance != 'undefined')

  return (
    <div className="sideDock-container">
      <div className="sideDock">
      {
        unfollowCardVis[0] && 
          <div className="popup-card-overlay">
            <ConfirmationUnfollowUserCard followers={user.id} following={unfollowCardVis[1]} toggleUnfollowCardVis={toggleUnfollowCardVis}/>
          </div>
      }
        <div className="sideDock--search">
          <form className="sideDock-form">
            <button className="sideDock-form--search__submit">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="
    r-14j79pv
    r-4qtqp9
    r-yyyyoo
    r-1xvli5t
    r-dnmrzs
    r-4wgw6l
    r-f727ji
    r-bnwqim
    r-1plcrui
    r-lrvibr
  "
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
            </button>
            <input
              className="sideDock-form--search__input"
              type="text"
              onChange={searchUser}
              placeholder="Search Hihi"
            />
          </form>
        </div>
       
        <section className="sideDock--happening">
          <header className="happening--header">
            <h2 className="happening--title">Who to follow</h2>
          </header>

          <div className="happening--body">
            {displayList.map(user => {
              const newTo = {
                pathname: '/profile/',
                userObj: user
              }
              return (
                <article className="happening--card">
                  <div className="user-info--container">
                    <img src={user.profile_image ? user.profile_image : profileImage}></img>
                    <div className="happening--card__text-wrapper">
                      <a href="">
                        <Link to={newTo}><h3>{user.name}</h3></Link>
                        <Link to={newTo}><p>@{user.username}</p></Link>
                      </a>
                    </div>
                  </div>

                  <button 
                    className="happening--card__follow-button"
                    onClick={() => follow(user.followers)}>
                      Follow
                  </button>
                </article>
              )
            })}
          </div>
         
          <footer className="happening--footer">
            <p className="happening--footer-text">Show more</p>
          </footer>
          </section>
          <section className="sideDock--happening">
            <header className="happening--header">
              <h2 className="happening--title">Who you're following</h2>
            </header>
         
            <div className="happening--body">
              {following.map(user => {
                const newTo = {
                  pathname: '/profile/',
                  userObj: user
                }
                return (
                  <article className="happening--card">
                    <div className="user-info--container">
                      <img src={user.profile_image ? user.profile_image : profileImage}></img>
                      <div className="happening--card__text-wrapper">
                        <a href="">
                          <Link to={newTo}><h3>{user.name}</h3></Link>
                          <Link to={newTo}><p>@{user.username}</p></Link>
                        </a>
                      </div>
                    </div>

                    <button 
                      className="happening--card__following-button"  
                      onMouseLeave={(e) => toggleFollowingHover(e)} 
                      onMouseEnter={(e) => toggleFollowingHover(e)} 
                      onClick={(e) => toggleUnfollowCardVis(user.following)}>
                        Following
                    </button>
                    </article>
                )})}
              </div>
          <footer className="happening--footer">
            <p className="happening--footer-text">Show more</p>
          </footer>
        </section>
        {/* <div className="sideDock--follow"></div> */}
        <div className="sideDock--footer">
          <div className="footer--wrapper">
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
            <a href="">Ads info</a>
            <a  onClick={toggleMore}>More ...</a>
            <a href="">&copy; 2021 Hihi, Inc.</a>
            {moreVisibilty && < OptionsSideBarMoreCard/>}
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
    search: state.search,
    followers: state.followers,
    following: state.following,
    auth: state.auth.user
  }
}

export default connect(mapStateToProps)(SideDock)
