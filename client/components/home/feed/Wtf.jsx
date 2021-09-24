import React from 'react'
import profileImage from '../../../styles/default-profile.png';

const Wtf = () => {
  return (
    <div>
      <div className="wtf-container">
        <div className="wtf-header">
          <div className="wtf-title">
            <h1>Who to follow</h1>
          </div>
          <div className="wtf-more">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="more">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wtf-user-list-container">
          <div className="wtf-user-container">
            <div className="wtf-user">
              <div className="profile-image">
                <img src={profileImage} />
              </div>
              <div className="user-info">
                <div className="user-deets">
                  <a href="">
                  <span className="user-name">BigRig</span>
                  <span className="user-handle"> @BigRig12345678</span>
                  </a>
                </div>
                <div className="user-follow">
                  <button>Follow</button>
                </div>
              </div>
            </div>
            <div className="wtf-user">
              <div className="profile-image">
                <img src={profileImage} />
              </div>
              <div className="user-info">
                <div className="user-deets">
                  <a href="">
                  <span className="user-name">BigRig</span>
                  <span className="user-handle"> @BigRig12345678</span>
                  </a>
                </div>
                <div className="user-follow">
                  <button>Follow</button>
                </div>
              </div>
            </div>
            <div className="wtf-user">
              <div className="profile-image">
                <img src={profileImage} />
              </div>
              <div className="user-info">
                <div className="user-deets">
                  <a href="">
                  <span className="user-name">BigRig</span>
                  <span className="user-handle"> @BigRig12345678</span>
                  </a>
                </div>
                <div className="user-follow">
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wtf
