import React from 'react'
import loginFace from '../../images/icons/login.png'
import donut from '../../images/icons/donut.png'

const Hamburger = props => {
  return (
    <div className="hamburger">
      <img src={donut} alt="donut" className="hamburger-dropdown"/>
      <img className="hamburger-face" src={loginFace} alt="generic head"/>
    </div>
  )
}

export default Hamburger