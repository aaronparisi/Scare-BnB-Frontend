import React, { useState, useEffect } from 'react'
import { LoggedInBoolRoute } from '../../utils/route_util'
import { SignInLinks, SignOutLinks } from './nav_bar_links'
import loginFace from '../../images/icons/login.png'
import donut from '../../images/icons/donut.png'

import styled, { ThemeProvider } from 'styled-components'
import { exchangeImageIdsForS3Urls } from '../../utils/properties_util'

const StyledDiv = styled.div`
  width: ${props => props.theme.width};
  max-height: ${props => props.theme.maxHeight};
  overflow: ${props => props.theme.overflow};
  transition: width .5s, max-height .5s;
`

const StyledImg = styled.img`
  padding: ${props => props.theme.padding};
  filter: ${props => props.theme.filter};
  transition: padding .5s;
`

const Hamburger = props => {
  const [expanded, setExpanded] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState([])

  useEffect(() => {
    if (props.currentUser !== null) {  // this feels hacky...
      exchangeImageIdsForS3Urls([props.currentUser.avatar_url.id])
      .then(data => {
        setRedirectUrl(data[0].url)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [props.currentUser.avatar_url]) // watch out for array equality issues...?

  const burgerWidth = (expanded) ? '150px' : '110px'
  const burgerMaxHeight = (expanded) ? '250px' : '48px'

  const loginAvatar = (
    props.currentUser == null || props.currentUser.avatar_url == null
  ) ? 
  loginFace : 
  redirectUrl

  const burgerTheme = {
    width: burgerWidth,
    maxHeight: burgerMaxHeight,
    overflow: 'hidden'
  }

  // padding: (expanded) ? '5px 7px' : (props.currentUser == null) ? '0px 0px' : '5px 7px',
  const faceTheme = {
    padding: (expanded) ? '5px 7px' : '0px 0px',
    filter: (props.currentUser == null || props.currentUser.avatar_url == null) ? 'invert(71%) sepia(58%) saturate(591%) hue-rotate(355deg) brightness(90%) contrast(87%)' : 'none'
  }

  const callSignInLinks = () => {
    return <SignInLinks />
  }

  const callSignOutLinks = () => {
    return <SignOutLinks userId={props.currentUser.id} logout={props.logout} />
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

  const genHamburgerFaceClass = () => {
    if (props.currentUser == null) {
      return (
        "nav-link-image hamburger-face"
      )
    } else {
      return ( 
        "nav-link-image hamburger-avatar"
      )
    }
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
        >
          <img src={donut} alt="donut" className="nav-link-image hamburger-dropdown"/>

          <ThemeProvider theme={faceTheme}>
            <StyledImg 
              className={genHamburgerFaceClass()} 
              src={loginAvatar}
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