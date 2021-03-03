import React from 'react'
import { Link } from 'react-router-dom';
// import { logout } from '../../actions/session_actions'  // * this gets passed in as a param
import signupText from '../../images/fontImages/signup.png'
import loginText from '../../images/fontImages/login.png'
import logoutText from '../../images/fontImages/logout.png'

export const SignInLinks = () => {
  return (
    <div className="nav-button-container session-links">
      <Link className="btn" to="/signup">
        <img className="nav-link-image" src={signupText} alt="sign up"/>
      </Link>
      <Link className="btn" to="/login">
        <img className="nav-link-image" src={loginText} alt="login"/>
      </Link>
    </div>
  )
}

export const SignOutLinks = ({ username, logout }) => {
  return (
    <div className="nav-button-container session-links">
      {/* <p>Hello, {username}</p> */}
      <button className="btn" onClick={logout}>
        <img className="nav-link-image" src={logoutText} alt="logout"/>
      </button>
    </div>
  )
}