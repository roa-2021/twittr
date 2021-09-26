<<<<<<< HEAD
import React from 'react'

import BadgeCard from './BadgeCard'
import NewTweetCard from './NewTweetCard'
import LogoutCard from './LogoutCard'
import ConfirmationSaveNewTweetDraftCard from './ConfirmationSaveNewTweetDraftCard'
import ConfirmationDiscardNewTweetDraftCard from './ConfirmationDiscardNewTweetDraftCard'
import ConfirmationDeleteTweetCard from './ConfirmationDeleteTweetCard'
import OptionsFollowingTweetCard from './OptionsFollowingTweetCard'

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
        <NewTweetCard />
      </div>
      <div className="card-test-page__card-container">
        <ConfirmationSaveNewTweetDraftCard />
      </div>
      <div className="card-test-page__card-container">
        <ConfirmationDiscardNewTweetDraftCard />
      </div>
      <div className="card-test-page__card-container">
        <ConfirmationDeleteTweetCard />
      </div>
      <div className="card-test-page__card-container">
        <OptionsFollowingTweetCard />
      </div>
    </div>
  )
}

export default CardTestEnvironment
||||||| parent of 738a689 (resolve app.jsx conflicts)
=======
import React from 'react'

import BadgeCard from './BadgeCard'

const CardTestEnvironment = () => {
  return (
    <div>
      <BadgeCard />
    </div>
  )
}

export default CardTestEnvironment
>>>>>>> 738a689 (resolve app.jsx conflicts)
