import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'  // ? why is this faded out??
import signupText from '../../images/fontImages/signup.png'
import loginText from '../../images/fontImages/login.png'
import logoutText from '../../images/fontImages/logout.png'

export const SignInLinks = () => {
  return (
    <div className="nav-button-container">
      <Link className="btn" to="/signup">
        <img className="nav-link-image" src={signupText} alt="sign up image"/>
      </Link>
      <Link className="btn" to="/login">
        <img className="nav-link-image" src={loginText} alt="login image"/>
      </Link>
    </div>
  )
}

export const SignOutLinks = ({ username, logout }) => {
  return (
    <div className="nav-button-container">
      {/* <p>Hello, {username}</p> */}
      <button className="btn" onClick={logout}>
        <img className="nav-link-image" src={logoutText} alt="logout image"/>
      </button>
    </div>
  )
}