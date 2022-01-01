import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import CarouselContainer from './CarouselContainer'

const ListingBox = props => {
  return (
    <li className="listing">
      <CarouselContainer propertyId={props.property.id} />

      <Link to={`/properties/${props.property.id}`} >
        <h1>{props.property.title.split('_').join(' ')}</h1>
      </Link>
      <p>beds: {props.property.beds}</p>
      <p>baths: {props.property.baths}</p>
      <p>"{props.property.description}"</p>
    </li>
  )
}

export default withRouter(ListingBox)