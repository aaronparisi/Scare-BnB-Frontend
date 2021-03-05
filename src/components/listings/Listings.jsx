import React, { useState } from 'react'
import SingleListingContainer from './SingleListingContainer'

const Listings = props => {
  return (
    <div className="listings">
      <ul className="listings-grid">
        {Object.values(props.properties).map((property, idx) => {
          return <SingleListingContainer key={idx} property={property} />
        })}
      </ul>
    </div>
  )
}

export default Listings