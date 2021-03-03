import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LoggedInBoolRoute } from '../../utils/route_util'
import { SignInLinks, SignOutLinks } from './nav_bar_links'
import logo from '../../images/fontImages/logo.png'
import HamburgerContainer from './hamburger_container'

class NavBar extends React.Component {
  constructor({ currentUser, logout }) {
    super({ currentUser, logout })  // ? why am i getting a warning here?

    this.callSignInLinks = this.callSignInLinks.bind(this)
    this.callSignOutLinks = this.callSignOutLinks.bind(this)
  }

  callSignInLinks() {
    return <SignInLinks />
  }

  callSignOutLinks() {
    return <SignOutLinks username={this.props.currentUser.username} logout={this.props.logout}/>
  }

  render() {
    return (
      <header className="nav-bar">
        <div className="nav-button-container">
          <Link className="btn" to="/">
            <img className="nav-link-image logo" src={logo} alt="sbnb logo"/>
          </Link>
        </div>
        {/* <Link className="btn" to="/chirps">CHIRPS</Link> */}
        {/* <LoggedInBoolRoute trueComponent={this.callSignOutLinks} falseComponent={this.callSignInLinks} path="/"/> */}
        <HamburgerContainer />
      </header>
    );
  }
};

export default withRouter(NavBar)