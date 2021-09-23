import React from 'react'

import Feed from './feed/Feed'

const Home = () => {
  return (
    <div className="wall-container">
      <section className="nav-panel"></section>
      <Feed />
      <section className="side-panel"></section>
    </div>
  )
}

export default Home
