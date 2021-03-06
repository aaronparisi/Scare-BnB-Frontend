import React, { useState } from 'react'
import { getProperties } from '../../actions/properties_actions'
import ListingBoxContainer from './ListingBoxContainer'

class Listings extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getProperties()
  }

  render() {
    return (
      <div className="listings">
        <ul className="listings-grid">
          {Object.values(this.props.properties).map((property, idx) => {
            return <ListingBoxContainer key={idx} property={property} stateId={idx} />
          })}
        </ul>
      </div>
    )
  }

}

export default Listings