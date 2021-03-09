import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logoText from '../../images/fontImages/logo.png'
import logo from '../../images/icons/family-logo.png'
import HamburgerContainer from './hamburger_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.noticeDisplay = this.noticeDisplay.bind(this)
  }

  noticeDisplay() {
    if (Object.keys(this.props.notices).length !== 0) {
      return (
        <div className="notices">
          {this.props.notices[0]}
        </div>
      )
    } else if (Object.keys(this.props.errors).length !== 0) {
      return (
        <div className="errors">
          {this.props.errors[0]}
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <header className="nav-bar">
          <Link className="btn logo-btn" to="/">
            <img className="logo-couch" src={logo} alt="sbnb logo"/>
            <img className="logo-text" src={logoText} alt="sbnb logo"/>
          </Link>

          {this.noticeDisplay()}

        <HamburgerContainer />
      </header>
    );
  }
};

export default withRouter(NavBar)