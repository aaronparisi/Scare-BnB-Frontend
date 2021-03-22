import React from 'react'
import { Link } from 'react-router-dom';
// import { logout } from '../../actions/session_actions'  // * this gets passed in as a param
import signupText from '../../images/fontImages/signup.png'
import loginText from '../../images/fontImages/login.png'
import logoutText from '../../images/fontImages/logout.png'
import profileText from '../../images/fontImages/profile.png'
import hostText from '../../images/fontImages/host.png'
import about from '../../images/fontImages/about.png'
import contact from '../../images/fontImages/contact.png'

export const SignInLinks = () => {

  return (
    <div className="menu">
      <div className="session-links sub-menu">
        <Link className="btn" to="/signup">
          <img className="nav-link-image" src={signupText} alt="sign up"/>
        </Link>
        <Link className="btn" to="/login">
          <img className="nav-link-image" src={loginText} alt="login"/>
        </Link>
      </div>
      <div className="info-links sub-menu">
        <Link className="btn" to="/">
          <img className="nav-link-image" src={about} alt="about"/>
        </Link>
        <Link className="btn" to="/">
          <img className="nav-link-image" src={contact} alt="contact"/>
        </Link>
      </div>
    </div>
  )
}

export const SignOutLinks = ({ userId, logout }) => {
  return (
    <div className="menu">
      {/* <p>Hello, {username}</p> */}
      <div className="info-links sub-menu">
        {/* maybe abstract this part */}
      </div>
      <div className="user-links sub-menu">
        <Link className="btn" to={`/users/${userId}/guest-profile`}>
          <img className="nav-link-image" src={profileText} alt="profile"/>
        </Link>
        <Link className="btn" to="/host-property">
          <img className="nav-link-image" src={hostText} alt="host a property"/>
        </Link>
      </div>
      <div className="session-links sub-menu">
        <button className="btn logout-button" onClick={logout}>
          <img className="nav-link-image" src={logoutText} alt="logout"/>
        </button>
      </div>
    </div>
  )
}