import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
//
import Landing from './Landing'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log('Authentication status: ' + isAuthenticated)

  return (
    <>
      <Auth0Provider
        domain="team-twitter.au.auth0.com"
        clientId="OS7B5yBiy5uWbmH7EOqwMwzoF8FdFWxD"
        redirectUri={window.location.origin}
        audience="https://team-twitter.au.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        <Landing />
      </Auth0Provider>
    </>
  )
}

export default App
