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
  filter: ${props => props.theme.filter};
  transition: padding .5s ease-in-out;
`

const Hamburger = props => {
  const [expanded, setExpanded] = useState(false)
  const [topHovered, setTopHovered] = useState(false)

  const burgerWidth = (expanded) ? '150px' : '110px'
  const burgerMaxHeight = (expanded) ? '250px' : '48px'

  const loginAvatar = (props.currentUser == null) ? loginFace : `https://springfieldbnb.s3.amazonaws.com/avatars/${props.currentUser.image_url}.png`
  // debugger
  const burgerTheme = {
    width: burgerWidth,
    maxHeight: burgerMaxHeight,
    overflow: 'hidden'
  }

  const faceTheme = {
    padding: (expanded) ? '5px 7px' : '0px 0px',
    filter: (props.currentUser == null) ? 'invert(71%) sepia(58%) saturate(591%) hue-rotate(355deg) brightness(90%) contrast(87%)' : 'none'
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

  const LoggedInFace = () => {
    return (
      <img src="" alt="coach lugash"/>
    )
  }

  const LoggedOutFace = () => {
    return (
      <ThemeProvider theme={faceTheme}>
        <StyledImg 
          className="nav-link-image hamburger-face" 
          src={loginFace} 
          alt="generic head"
        />
      </ThemeProvider>
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
          {/* <LoggedInBoolRoute
            trueComponent={LoggedInFace}
            falseComponent={LoggedOutFace}
          /> */}
          {/* when i move the above to a separate function,
          the transition on the padding does not work */}
          <ThemeProvider theme={faceTheme}>
            <StyledImg 
              className="nav-link-image hamburger-face" 
              src={loginAvatar}
              // src="https://springfieldbnb.s3.us-west-2.amazonaws.com/avatars/Coach_Lugash.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEIEwAWtYlId%2Fa3ABereKGyaSWlUe9s8Y8p%2BnoqRumFAiEAlQ9OopRFyzXhJrtmZZx2Tnn5wY3cJ89quHeAxGC9v2kq%2FwII3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMjY2MjUxMjIxNzEiDKy0Y%2B0XRgcdpgWTcCrTAjYnfnjYEAztmFClCUt2iGlE8ZHQ4i7w4nGQaiqWBpmuJV9Gc3z55aFyXiQUdkJu3lcOFpHDJWelHhGMPonop2JE69J%2FakniV%2FpBRIFmYUCWoFGL%2F6vD9CXQpjXG1JQyLx0k%2FG3ia70ld1W%2FSai1Ib936rqQgPn1KdkrA7a8KQCnenR%2FQLSnL08AkjNnr1z8N%2F2ajVLIWWOxuUOBfgRFBE8i%2BzwjzMTJ1lA8o3hnKj8g1gLtI%2FAS6TLRek3AELclMhrFoOGRcWmHEr0ZFKZslMxTerm1i%2B7FQMzl3zJ0AmXAt5CMXS4iDrpdLhThU1J5q%2FlfQ21ARsHpH0xNb6NXGA6OyE105dDPVDiuN5oq4O2kp%2FbMqONtdEkTicMWl8mcIuYEwwdzCIE%2F6XRZ57PiWcNB%2BQ%2FDKURIpv4RHaDcKNpqx7pXA7jGXftvhdVogHvQMn7DADDsoIWCBjqzAii1FpeR4zR4E9dUCctqyJx4NEgC961wjEmGtBBf%2FBu4rYd1Y8Eb3040kPu2HL1DoeiaRt3KROwBOqsVPzAQqQERWszFqJI%2F7%2BXiA5Pxzy8oemkLuOvY%2B9Vr6O2lugTTtRowMv4a%2B0epF%2Fl%2BMAa%2F6H3TjXi5RP5hTrTZ3rHN0bg7RfM9FcLURx5MIKhb5a6kX7oIDilSk3fnQg27Uah41%2FveVJJowRqtMA%2BhtMNilPnhBn%2F%2Bo4Fui9lJ5OZBR1HoFPe1d03xytr9GaMcEW7GSr2fV2uIRXyU%2F8JBzOoF%2BUV1ZVhnIrEpa0lzT7fGnmfNgtT%2FdO9U0vXfRmO5rgTGXZQ12UOLAECc3bKWMvam7vxK0ofwLaxYLWBpdbfH3rhJfZyk1wBMwyY%2F0LNLgb5WVwg97%2FY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210304T222139Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR263SA557RKDT6EW%2F20210304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1d3749882c4105e6ad0f427e2e8cae1913c6715d3d6ac12ee0c0c0c73b72e623"
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