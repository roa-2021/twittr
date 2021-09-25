import React from 'react'

import BadgeCard from './BadgeCard'
import TweetCard from './TweetCard'
import LogoutCard from './LogoutCard'

const CardTestEnvironment = () => {
  return (
    <div className="card-test-page">
      <div className="card-test-page__card-container">
        <LogoutCard />
      </div>
      <div className="card-test-page__card-container">
        <BadgeCard />
      </div>
      <div className="card-test-page__card-container">
        <TweetCard />
      </div>
    </div>
  )
}

export default CardTestEnvironment