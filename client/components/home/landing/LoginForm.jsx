import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { loginError, registerUserRequest } from '../../../actions/authActions'

const LoginForm = props => {
  const { auth, dispatch, user } = props
  let history = useHistory()

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
      //  const confirmSuccess = () => { props.history.push('/') }

      const confirmSuccess = id => {
        history.push(`/home`)
      }

      const userInfo = { ...formData }
      delete userInfo.confirm_password
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
        >
          <g>
            <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
          </g>
        </svg>
        {/* logo */}
        <svg
          viewBox="0 0 24 24"
          aria-label="Twitter"
          className="login-form--logo"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
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
        />
        <input
          type="text"
          className="username"
          placeholder="username"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="text"
          className="email"
          placeholder="Email"
          name="email_address"
          autoComplete="email"
          onChange={handleChange}
          value={formData.email_address}
        />
        <input
          type="text"
          className="password"
          placeholder="Password"
          name="password"
          autoComplete="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="text"
          className="confirm-password"
          placeholder="Confirm Password"
          name="confirm_password"
          autoComplete="password"
          onChange={handleChange}
          value={formData.confirm_password}
        />
        <a href="">Use email instead</a>
        <p className="date-title">Date of birth</p>
        <p className="date-text">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <div className="login-select--wrapper">
          <select name="" id="" className="login-form--month">
            <option value="#">Month</option>
            <option value="#">Jan</option>
          </select>
          <select name="" id="" className="login-form--day">
            <option value="#">Day</option>
            <option value="#">1</option>
          </select>
          <select name="" id="" className="login-form--year">
            <option value="#">Year</option>
            <option value="#">1970</option>
          </select>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  )
}

const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
    user: globalState.user,
  }
}

export default connect(mapStateToProps)(LoginForm)
