import React, { useState } from 'react'
import LoginForm from './LoginForm'
import LoginTrueForm from './LoginTrueForm'

const LoginPanel = () => {
  //
  // /////////////
  // const loginModal = document.querySelector('.loginModal')

  // const overlay = document.querySelector('.overlay')

  // const btnCloseLoginModal = document.querySelector('.loginModal')

  // const btnOpenLoginModal = document.querySelectorAll('.openLoginModal')
  // console.log(btnOpenLoginModal)
  // const openLoginModal = function () {
  //   loginModal.classList.remove('hidden')
  //   overlay.classList.remove('hidden')
  // }

  // // const closeLoginModal = function () {
  // //   modalOne.classList.add('hidden')
  // // }

  // for (let i = 0; i < btnOpenLoginModal.length; i++)
  //   // btnOpenLoginModal[i].addEventListener('click', openLoginModal)
  //   //btnCloseLoginModal.addEventListener('click', closeLoginModal)
  //   // overlay.addEventListener('click', closeModal)

  //   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
  //     closeModal()
  //   }

  /////////
  const [popupVisReg, setPopupVisReg] = useState(false)
  const [popupVisLog, setPopupVisLog] = useState(false)

  function toggleRegPopupVis () {
    setPopupVisReg (!popupVisReg)
  }
  function toggleLogPopupVis () {
    setPopupVisLog (!popupVisLog)
  }

  return (
    <div className="login-panel">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="twitter-logo">
        <g>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
      <h1>Happening now</h1>
      <h2>Join Twitter today.</h2>
      <div className="login-buttons">
        <div className="apple-login">
          <button onClick={toggleRegPopupVis}>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
              <g>
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z">
                </path>
              </g>
            </svg>
            Sign up with Apple
          </button>
        </div>
        <button
          className="login"
          onClick={toggleRegPopupVis}
        >
          Sign up with phone or email
        </button>
      </div>
      <p>
        <span>By signing up, you agree to the </span>
        <a href="">Terms of Service</a>
        <span> and </span>
        <a href="">Privacy Policy</a>
        <span>, including </span>
        <a href="">Cookie Use.</a>
      </p>
      <p className="login-question">
        <span>Already have an account? </span>
        <span
          className="login-anchor"
          href=""
          onClick={toggleLogPopupVis}
        >
          Sign in
        </span>
      </p>
      {/* //toggle login and register */}
      {/* {loginToggle == 'show-login' && <LoginTrueForm show={true} />}
      {registerToggle == 'show-register' && <LoginForm show={true} />} */}
      {/* <div className="overlay hidden"></div> */}
      {
        popupVisReg && 
        <div className="popup-card-overlay">
          <LoginForm togglePopupVis={toggleRegPopupVis} />
        </div>
      }
      {
        popupVisLog && 
        <div className="popup-card-overlay">
          <LoginTrueForm togglePopupVis={toggleLogPopupVis} />
        </div>
      }
    </div>
  )
}

export default LoginPanel
