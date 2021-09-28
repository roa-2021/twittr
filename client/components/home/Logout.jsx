import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import LogoutCard from '../cards/LogoutCard'

const Logout = () => {
  return (
    <div className="logout-page-layout">
      <LogoutCard />
    </div>
  )
}

export default Logout
