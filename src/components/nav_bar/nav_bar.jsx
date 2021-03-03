import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logoText from '../../images/fontImages/logo.png'
import logo from '../../images/icons/family-logo.png'
import HamburgerContainer from './hamburger_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="nav-bar">
        <div className="nav-bar-logo">
          <Link className="btn logo-btn" to="/">
            <img className="nav-link-image logo" src={logo} alt="sbnb logo"/>
            <img className="nav-link-image logo-text" src={logoText} alt="sbnb logo"/>
          </Link>
        </div>
        {/* <Link className="btn" to="/chirps">CHIRPS</Link> */}        
        <HamburgerContainer />
      </header>
    );
  }
};

export default withRouter(NavBar)