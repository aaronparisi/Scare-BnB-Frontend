import React, { useState } from 'react'
import ListingBoxContainer from './ListingBoxContainer'

const Listings = props => {
  return (
    <div className="listings">
      <ul className="listings-grid">
        {Object.values(props.properties).map((property, idx) => {
          return <ListingBoxContainer key={idx} property={property} stateId={idx} />
        })}
      </ul>
    </div>
  )
}

export default Listings