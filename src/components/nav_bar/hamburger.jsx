import React, { useState } from 'react'
import { LoggedInBoolRoute } from '../../utils/route_util'
import { SignInLinks, SignOutLinks } from './nav_bar_links'
import loginFace from '../../images/icons/login.png'
import donut from '../../images/icons/donut.png'

import styled, { ThemeProvider } from 'styled-components'

const StyledDiv = styled.div`
  border: ${props => props.theme.border};
`

const Hamburger = props => {
  const [expanded, setExpanded] = useState(false)
  const [topHovered, setTopHovered] = useState(false)

  const hoverTheme = (topHovered) ? {
    border: '1px solid #FBD822'
  } : {
    border: '1px solid #D9A72D'
  }

  const callSignInLinks = () => {
    return <SignInLinks />
  }

  const callSignOutLinks = () => {
    return <SignOutLinks username={props.currentUser.username} logout={props.logout} />
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
    <ThemeProvider theme={hoverTheme}>
      <StyledDiv
        className="hamburger" 
        onClick={() => setExpanded(!expanded)}
      >
        <div
          className="hamburger-top"
          onMouseEnter={() => setTopHovered(true)}
          onMouseLeave={() => setTopHovered(false)}
        >
          <img src={donut} alt="donut" className="nav-link-image hamburger-dropdown"/>
          <img className="nav-link-image hamburger-face" src={loginFace} alt="generic head"/>
        </div>
        <MenuDisplay />
      </StyledDiv>
   </ThemeProvider>
  )
}

export default Hamburger