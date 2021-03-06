import React, { useState } from 'react'
import { connect } from 'react-redux'
import profileImage from '../../../styles/default-profile.png'
import { Link } from 'react-router-dom'

import OptionsSideBarMoreCard from '../../cards/OptionsSideBarMoreCard'
import ConfirmationUnfollowUserCard from '../../cards/ConfirmationUnfollowUserCard'


const SideDock = ({ followers, following }) => {
  const [moreVisibilty, setMoreVisibilty] = useState(false)
  const [isFollowing, setFollowing] = useState(true)
  const [unfollowCardVis, setUnfollowCardVis] = useState(false)

  function toggleUnfollowCardVis() {
    setUnfollowCardVis(!unfollowCardVis)
  }

  function toggleFollowingHover(e) {
    setFollowing(!isFollowing)
    if (isFollowing) {
      e.target.innerHTML = 'Unfollow'
    } else {
      e.target.innerHTML = 'Following'
    }
  }

  const unfollow = (id) => {
    
    console.log('unfollow user ', id)
  }

  function toggleMore() {
    setMoreVisibilty(!moreVisibilty)
  }

  return (
    <div className="sideDock-container">
      <div className="sideDock">
      {
        unfollowCardVis && 
          <div className="popup-card-overlay">
            <ConfirmationUnfollowUserCard toggleUnfollowCardVis={toggleUnfollowCardVis}/>
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
              placeholder="Search Twitter"
            />
          </form>
        </div>
        <section className="sideDock--happening">
          <header className="happening--header">
            <h2 className="happening--title">Who you're following</h2>
          </header>
          <ul>
          {/* const newTo = {
                pathname: '/home/profile/',
                userObj: user
            } */}

            {followers.map(follower => {
              return (
              
                <Link to={{ pathname: '/home/profile/', userObj:follower}}>{follower.name}</Link>
               
              )
              //  console.log(follower)
            })}

          </ul>
          <div className="happening--body">
            {following.map(user => {
              return (
              <article className="happening--card">
                <div className="user-info--container">
                  <img src={user.profile_image ? user.profile_image : profileImage}></img>
                  <div className="happening--card__text-wrapper">
                    <a href="">
                      <h3>{user.name}</h3>
                      <p>@{user.username}</p>
                    </a>
                  </div>
                </div>
                  <button 
                    className="happening--card__following-button"  
                    onMouseLeave={(e) => toggleFollowingHover(e)} 
                    onMouseEnter={(e) => toggleFollowingHover(e)} 
                    onClick={toggleUnfollowCardVis}>
                      Following
                    </button>
              </article>
            )})}
          </div>
          <footer className="happening--footer">
            <p className="happening--footer-text">Show more</p>
          </footer>
        </section>
        <section className="sideDock--happening">
          <header className="happening--header">
            <h2 className="happening--title">Who's following you</h2>
          </header>
          <div className="happening--body">
            {followers.map(user => {
              return (
                <article className="happening--card">
                  <div className="user-info--container">
                    <img src={user.profile_image ? user.profile_image : profileImage}></img>
                    <div className="happening--card__text-wrapper">
                      <a href="">
                        <h3>{user.name}</h3>
                        <p>@{user.username}</p>
                      </a>
                    </div>
                  </div>
                  <button className="happening--card__follow-button">Follow</button>
            </article>
            )
          })}
          </div>
          {following.map(followed => {
              return (
              <>
                <Link to={{ pathname: '/home/profile/', userObj:followed}}>{followed.name}</Link>
                <p onClick={() => unfollow(followed.following)}>unfollow</p>
             </>  
              )
              //  console.log(follower)
            })}
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
            <a href="">&copy; 2021 Twitter, Inc.</a>
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

    followers: state.followers,
    following: state.following
  }
}

export default connect(mapStateToProps)(SideDock)

