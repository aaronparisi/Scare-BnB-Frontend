import React, { useState } from 'react'

const Listings = props => {
  return (
    <div>There are {Object.keys(props.properties).length} properties</div>
    // <div>hello from listings</div>
  )
}

export default Listings