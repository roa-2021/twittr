import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import NewTweetCard from '../../cards/NewTweetCard'

const Tweet = () => {

  const [popupVisibility, setPopupVisibility] = useState(false)

  function togglePopupVis() {
    setPopupVisibility(!popupVisibility)
  }

  return (
    <>
      <div className="nav-tweet-container" onClick={togglePopupVis}>
        <button className="nav-tweet-button">
          <div className="nav-tweet-button-content">
            <span>
              <div>
                <div>
                  <span>
                    <span>
                      Tweet
                    </span>
                  </span>
                </div>
              </div>
            </span>
          </div>
        </button>
      </div>
      {
        popupVisibility && 
        <div className="popup-card-overlay">
            <NewTweetCard togglePopupVis={togglePopupVis}/>
        </div>
      }
    </>
  )
}

export default Tweet
