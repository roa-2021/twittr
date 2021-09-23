import React from 'react'

const Landing = () => {
  return (
    <div className="landing-login-container">
      <div className="landing-container">
        <div className="image-panel">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="landing-logo">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <div className="login-panel">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="twitter-logo">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
          <h1>Happening now</h1>
          <h2>Join Twitter today.</h2>
          <div className="login-buttons">
            <button>Sign up with Apple</button>
            <button className="login">Sign up with phone or email</button>
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
            <a href="">Sign in</a>
          </p>
        </div>
      </div>
      <footer>
        <a href="">About</a>
        <a href="">Help Center</a>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Ads Info</a>
        <a href="">Blog</a>
        <a href="">Status</a>
        <a href="">Careers</a>
        <a href="">Brand Resources</a>
        <a href="">Advertising</a>
        <a href="">Marketing</a>
        <a href="">Twitter for Business</a>
        <a href="">Developers</a>
        <a href="">Directory</a>
        <a href="">Settings</a>
        <a href="">&copy;2021 Twitter, inc.</a>
      </footer>
    </div>
  )
}

export default Landing
