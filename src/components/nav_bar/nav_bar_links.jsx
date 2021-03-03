import React from 'react'
import { Link } from 'react-router-dom';
// import { logout } from '../../actions/session_actions'  // * this gets passed in as a param
import signupText from '../../images/fontImages/signup.png'
import loginText from '../../images/fontImages/login.png'
import logoutText from '../../images/fontImages/logout.png'

export const SignInLinks = () => {
  return (
    <div className="menu">
      <div className="session-links">
        <Link className="btn" to="/signup">
          <img className="nav-link-image" src={signupText} alt="sign up"/>
        </Link>
        <Link className="btn" to="/login">
          <img className="nav-link-image" src={loginText} alt="login"/>
        </Link>
      </div>
      <div className="info-links">
        {/* stuff about the site, contact, about us, etc. */}
      </div>
    </div>
  )
}

export const SignOutLinks = ({ username, logout }) => {
  return (
    <div className="menu">
      {/* <p>Hello, {username}</p> */}
      <div className="session-links">
        <button className="btn" onClick={logout}>
          <img className="nav-link-image" src={logoutText} alt="logout"/>
        </button>
      </div>
      <div className="info-links">
        {/* maybe abstract this part */}
      </div>
      <div className="user-links">
        {/* links to current user profile */}
      </div>
    </div>
  )
}