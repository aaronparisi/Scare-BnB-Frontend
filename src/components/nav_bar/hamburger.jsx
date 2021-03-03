import React, { useState } from 'react'
import { LoggedInBoolRoute } from '../../utils/route_util'
import { SignInLinks, SignOutLinks } from './nav_bar_links'
import loginFace from '../../images/icons/login.png'
import donut from '../../images/icons/donut.png'

const Hamburger = props => {
  const [expanded, setExpanded] = useState(false)

  const callSignInLinks = () => {
    return <SignInLinks />
  }

  const callSignOutLinks = () => {
    return <SignOutLinks username={props.currentUser.username} logout={props.logout}/>
  }

  const MenuDisplay = () => {
    if (expanded) {
      return (
        <LoggedInBoolRoute trueComponent={callSignOutLinks} falseComponent={callSignInLinks} path="/"/>
      )
    } else {
      return null
    }
  }
  return (
    <div className="hamburger" onClick={() => setExpanded(!expanded)}>
      <div className="hamburger-top">
        <img src={donut} alt="donut" className="nav-link-image hamburger-dropdown"/>
        <img className="nav-link-image hamburger-face" src={loginFace} alt="generic head"/>
      </div>
      <MenuDisplay />
    </div>
  )
}

export default Hamburger