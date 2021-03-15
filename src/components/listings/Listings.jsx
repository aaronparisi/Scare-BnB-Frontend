import React, { useState } from 'react'
import ListingBoxContainer from './ListingBoxContainer'

class Listings extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProperties()
  }

  render() {
    
    return (
      <div className="listings">
        <ul className="listings-grid">
          {this.props.properties.map((property, idx) => {
            return <ListingBoxContainer key={idx} property={property} stateId={property.id-1} />
          })}
        </ul>
      </div>
    )
  }

}

export default Listings