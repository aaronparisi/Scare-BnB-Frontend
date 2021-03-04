import React, { useState } from 'react'
import { LoggedInBoolRoute } from '../../utils/route_util'
import { SignInLinks, SignOutLinks } from './nav_bar_links'
import loginFace from '../../images/icons/login.png'
import donut from '../../images/icons/donut.png'

import styled, { ThemeProvider } from 'styled-components'

const StyledDiv = styled.div`
  width: ${props => props.theme.width};
  max-height: ${props => props.theme.maxHeight};
  overflow: ${props => props.theme.overflow};
  transition: width .5s, max-height .5s;
`

const StyledImg = styled.img`
  padding: ${props => props.theme.padding};
  transition: padding .5s
`

const Hamburger = props => {
  const [expanded, setExpanded] = useState(false)
  const [topHovered, setTopHovered] = useState(false)

  // const borderColor = (topHovered) ? '#FBD822' : '#D9A72D'
  const burgerWidth = (expanded) ? '150px' : '110px'
  const burgerMaxHeight = (expanded) ? '250px' : '48px'

  const burgerTheme = {
    width: burgerWidth,
    maxHeight: burgerMaxHeight,
    overflow: 'hidden'
  }

  const faceTheme = {
    padding: (expanded) ? '5px 7px' : '0px 0px',
  }

  const callSignInLinks = () => {
    return <SignInLinks />
  }

  const callSignOutLinks = () => {
    return <SignOutLinks username={props.currentUser.username} logout={props.logout} />
  }

  const MenuDisplay = () => {
    return (
      <LoggedInBoolRoute 
        trueComponent={callSignOutLinks} 
        falseComponent={callSignInLinks} 
        path="/"
      />
    )
  }
  return (
    <ThemeProvider theme={burgerTheme}>
      <StyledDiv
        className="hamburger"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div
          className="hamburger-top"
          // onClick={() => setExpanded(!expanded)}
          onMouseEnter={() => setTopHovered(true)}
          onMouseLeave={() => setTopHovered(false)}
        >
          <img src={donut} alt="donut" className="nav-link-image hamburger-dropdown"/>
          <ThemeProvider theme={faceTheme}>
            <StyledImg 
              className="nav-link-image hamburger-face" 
              src={loginFace} 
              alt="generic head"
            />
          </ThemeProvider>
        </div>
        
        <MenuDisplay />
      </StyledDiv>
   </ThemeProvider>
  )
}

export default Hamburger