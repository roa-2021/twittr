import React from 'react'

import BadgeCard from './BadgeCard'
import NewTweetCard from './NewTweetCard'
import LogoutCard from './LogoutCard'
import ConfirmationSaveNewTweetDraftCard from './ConfirmationSaveNewTweetDraftCard'
import ConfirmationDiscardNewTweetDraftCard from './ConfirmationDiscardNewTweetDraftCard'
import ConfirmationDeleteTweetCard from './ConfirmationDeleteTweetCard'
import OptionsFollowingTweetCard from './OptionsFollowingTweetCard'
import OptionsPersonalTweetCard from './OptionsPersonalTweetCard'
import OptionsTrendCard from './OptionsTrendCard'
import OptionsSideBarMoreCard from './OptionsSideBarMoreCard'
import ConfirmationUnfollowUserCard from './ConfirmationUnfollowUserCard'

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
      <div className="card-test-page__card-container">
        <OptionsPersonalTweetCard />
      </div>
      <div className="card-test-page__card-container">
        <OptionsTrendCard />
      </div>
      <div className="card-test-page__card-container">
        <OptionsSideBarMoreCard />
      </div>
      <div className="card-test-page__card-container">
        <ConfirmationUnfollowUserCard />
      </div>
    </div>
  )
}

export default CardTestEnvironment
