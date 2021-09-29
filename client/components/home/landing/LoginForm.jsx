import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { loginError, registerUserRequest } from '../../../actions/authActions'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const LoginForm = props => {
  const { auth, dispatch, user, togglePopupVis } = props
  let history = useHistory()
  // const [Birthday, setBirthday] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email_address: '',
    password: '',
    confirm_password: '',
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = e => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    e.target.reset()

    // console.log(formData);

    let { password, confirm_password } = formData

    if (confirm_password != password) {
      dispatch(loginError("Passwords don't match"))
    } else {

      const confirmSuccess = id => {
        history.push(`/`)
      }
      // formData.birthday=Birthday
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      // console.log(userInfo)
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <div className="login-form--container">
      <div className="login-form--header">
        {/* x */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="login-form__close"
          onClick={togglePopupVis}
        >
          <g>
            <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
          </g>
        </svg>
        {/* logo */}
        <svg  viewBox="0 0 1704 1477" fill="none" xmlns="http://www.w3.org/2000/svg" className="login-form--logo">
            <path d="M1678.71 407.184L1513.77 297.196C1483 200.26 1418.58 117.526 1332.15 63.9419C1245.72 10.358 1142.98 -10.5421 1042.49 5.01748C941.997 20.5771 850.383 71.5703 784.199 148.784C718.014 225.998 681.624 324.341 681.602 426.045V548.14L12.4492 1384.7C5.76448 1393.06 1.57556 1403.13 0.364832 1413.76C-0.845892 1424.4 0.970825 1435.15 5.60575 1444.8C10.2407 1454.45 17.5053 1462.58 26.563 1468.28C35.6207 1473.98 46.103 1477 56.8028 1477H795.202C990.97 1476.78 1178.66 1398.9 1317.08 1260.45C1455.51 1122 1533.38 934.288 1533.6 738.491V598.465L1678.71 501.713C1686.49 496.525 1692.87 489.497 1697.28 481.252C1701.69 473.007 1704 463.8 1704 454.449C1704 445.097 1701.69 435.891 1697.28 427.646C1692.87 419.4 1686.49 412.372 1678.71 407.184ZM782.039 888.479L498.039 1229.33C493.263 1235.06 487.406 1239.8 480.801 1243.26C474.196 1246.73 466.972 1248.86 459.543 1249.54C444.54 1250.9 429.609 1246.25 418.036 1236.6C406.463 1226.95 399.195 1213.11 397.832 1198.1C396.469 1183.09 401.121 1168.16 410.766 1156.59L694.766 815.736C699.541 810.005 705.399 805.27 712.004 801.803C718.609 798.336 725.832 796.204 733.261 795.529C740.69 794.853 748.179 795.648 755.301 797.868C762.423 800.087 769.038 803.688 774.768 808.465C780.499 813.241 785.233 819.099 788.699 825.705C792.166 832.311 794.298 839.536 794.973 846.966C795.648 854.396 794.853 861.886 792.634 869.009C790.415 876.132 786.814 882.748 782.039 888.479ZM1164.4 454.449C1147.55 454.449 1131.08 449.451 1117.07 440.088C1103.06 430.725 1092.14 417.416 1085.69 401.846C1079.24 386.275 1077.55 369.142 1080.84 352.612C1084.13 336.082 1092.24 320.899 1104.16 308.982C1116.07 297.065 1131.25 288.949 1147.78 285.661C1164.31 282.373 1181.44 284.06 1197.01 290.51C1212.57 296.96 1225.88 307.881 1235.24 321.895C1244.6 335.908 1249.6 352.383 1249.6 369.236C1249.6 391.836 1240.63 413.51 1224.65 429.491C1208.67 445.471 1187 454.449 1164.4 454.449Z" fill="#59B781"/>
        </svg>
      </div>
      <h2 className="login-form--title">Create your account</h2>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        {auth.errorMessage && (
          <span className="has-text-danger is-large">{auth.errorMessage}</span>
        )}
        <input
          type="text"
          className="name"
          placeholder="Name"
          name="name"
          autoComplete="name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="text"
          className="username"
          placeholder="username"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
          name="email_address"
          autoComplete="email"
          onChange={handleChange}
          value={formData.email_address}
          required
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          name="password"
          autoComplete="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input
          type="password"
          className="confirm-password"
          placeholder="Confirm Password"
          name="confirm_password"
          autoComplete="password"
          onChange={handleChange}
          value={formData.confirm_password}
          required
        />
        <a href="">Use email instead</a>
        {/* <p className="date-title">Date of birth</p>
        <p className="date-text">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p> */}
        {/* <DatePicker selected={Birthday} onChange={(date) => setBirthday(date)} /> */}
        <button>Sign up</button>
      </form>
    </div>
  )
}
  
const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps)(LoginForm)
