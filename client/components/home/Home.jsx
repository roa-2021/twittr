import React from 'react'

import FeedDock from './feed/FeedDock'
import NavDock from './nav/NavDock'
import SideDock from './side/SideDock'

const Home = () => {
  return (
    <div className="wall-container">
      <NavDock />
      <FeedDock />
      <SideDock />
    </div>
  )
}

export default Home
