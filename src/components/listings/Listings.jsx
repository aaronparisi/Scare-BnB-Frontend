import React from 'react'
import ListingBoxContainer from './ListingBoxContainer'
import { Link, withRouter } from 'react-router-dom'

class Listings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.getProperties()
  }

  render() {
    
    return (
      <div className="listings yellow-container">
        <ul className="listings-grid">
          {this.props.properties.map((property, idx) => {
            return <ListingBoxContainer key={idx} property={property} stateId={property.id-1} />
          })}
        </ul>

        <Link to="/listings" >
          All Properties!
        </Link>
      </div>
    )
  }

}

export default withRouter(Listings)