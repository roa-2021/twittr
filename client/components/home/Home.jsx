import React from 'react'

import Feed from './feed/Feed'
import NavDock from './nav/NavDock'
import SideDock from './side/SideDock'

const Home = () => {
  return (
    <div className="wall-container">
      <NavDock />
      <Feed />
      <SideDock />
    </div>
  )
}

export default Home
