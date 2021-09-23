import React from 'react'

import Feed from './feed/Feed'
import NavDock from './nav/NavDock'

const Home = () => {
  return (
    <div className="wall-container">
      <NavDock />
      <Feed />
      <section className="side-panel"></section>
    </div>
  )
}

export default Home
