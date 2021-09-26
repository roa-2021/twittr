import React, { useState } from 'react'
import un from '../../../styles/UN.png'
import setting from '../../../styles/SETTING.png'
// import mac from '../../../styles/MAC.png'
import { Link } from 'react-router-dom'
// import { logOff } from '/authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'

const SideDock = () => {
  return (
    <div className="sideDock-container">
      <div className="sideDock">
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
            <h2 className="happening--title">What's Happening</h2>
          </header>
          <div className="happening--body">
            <article className="happening--card">
              <div className="happening--card__text-wrapper">
                <p>World news &bull; LIVE</p>
                <h3>The UN General Assembly continues in New York</h3>
              </div>

              <img src={un} />
            </article>
            <article className="happening--card">
              <div>
                <div className="happening--card__text-wrapper">
                  <p>Trending in New Zealand</p>
                  <h3>Chris Hipkins</h3>
                </div>
              </div>
            </article>
            <article className="happening--card">
              <div className="happening--card__text-wrapper">
                <p>The Washington Post &bull; This morning</p>
                <h3>
                  Every setting you should change right now to protext your
                  privacy
                </h3>
              </div>
              <img src={setting} />
            </article>
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
            <a href="">More ...</a>
            <a href="">&copy; 2021 Twitter, Inc.</a>

            <IfAuthenticated>
              <Link to="/logout">Log off</Link>
            </IfAuthenticated>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideDock
