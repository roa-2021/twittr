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
        <svg  viewBox="0 0 1704 1477" fill="none" xmlns="http://www.w3.org/2000/svg" className="twitter-logo">
            <path d="M1678.71 407.184L1513.77 297.196C1483 200.26 1418.58 117.526 1332.15 63.9419C1245.72 10.358 1142.98 -10.5421 1042.49 5.01748C941.997 20.5771 850.383 71.5703 784.199 148.784C718.014 225.998 681.624 324.341 681.602 426.045V548.14L12.4492 1384.7C5.76448 1393.06 1.57556 1403.13 0.364832 1413.76C-0.845892 1424.4 0.970825 1435.15 5.60575 1444.8C10.2407 1454.45 17.5053 1462.58 26.563 1468.28C35.6207 1473.98 46.103 1477 56.8028 1477H795.202C990.97 1476.78 1178.66 1398.9 1317.08 1260.45C1455.51 1122 1533.38 934.288 1533.6 738.491V598.465L1678.71 501.713C1686.49 496.525 1692.87 489.497 1697.28 481.252C1701.69 473.007 1704 463.8 1704 454.449C1704 445.097 1701.69 435.891 1697.28 427.646C1692.87 419.4 1686.49 412.372 1678.71 407.184ZM782.039 888.479L498.039 1229.33C493.263 1235.06 487.406 1239.8 480.801 1243.26C474.196 1246.73 466.972 1248.86 459.543 1249.54C444.54 1250.9 429.609 1246.25 418.036 1236.6C406.463 1226.95 399.195 1213.11 397.832 1198.1C396.469 1183.09 401.121 1168.16 410.766 1156.59L694.766 815.736C699.541 810.005 705.399 805.27 712.004 801.803C718.609 798.336 725.832 796.204 733.261 795.529C740.69 794.853 748.179 795.648 755.301 797.868C762.423 800.087 769.038 803.688 774.768 808.465C780.499 813.241 785.233 819.099 788.699 825.705C792.166 832.311 794.298 839.536 794.973 846.966C795.648 854.396 794.853 861.886 792.634 869.009C790.415 876.132 786.814 882.748 782.039 888.479ZM1164.4 454.449C1147.55 454.449 1131.08 449.451 1117.07 440.088C1103.06 430.725 1092.14 417.416 1085.69 401.846C1079.24 386.275 1077.55 369.142 1080.84 352.612C1084.13 336.082 1092.24 320.899 1104.16 308.982C1116.07 297.065 1131.25 288.949 1147.78 285.661C1164.31 282.373 1181.44 284.06 1197.01 290.51C1212.57 296.96 1225.88 307.881 1235.24 321.895C1244.6 335.908 1249.6 352.383 1249.6 369.236C1249.6 391.836 1240.63 413.51 1224.65 429.491C1208.67 445.471 1187 454.449 1164.4 454.449Z" fill="#59B781"/>
        </svg>
      <h1>Happening now</h1>
      <h2>Join Hihi today.</h2>
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
