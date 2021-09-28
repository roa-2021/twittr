import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import FeedDock from './feed/FeedDock'
import NavDock from './nav/NavDock'
import SideDock from './side/SideDock'

const Home = ({ dispatch, user }) => {

  return (
    <div className="wall-container">
      <NavDock />
      <FeedDock />
      <SideDock />
    </div>
  )
}
const mapStateToProps = store => {
  return {
    user: store.auth.user
  }
}

export default connect(mapStateToProps)(Home)
