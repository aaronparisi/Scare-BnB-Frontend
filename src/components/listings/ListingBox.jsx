import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const ListingBox = props => {
  return (
    <li className="listing">
      <div className="carousel">
        <img
          src={`https://springfieldbnb.s3.amazonaws.com/properties/${props.property.title}.png`}
          alt={props.property.title}
          className="property-thumbnail"
        />
        <img
          src={`https://springfieldbnb.s3.amazonaws.com/properties/${props.property.title}.png`}
          alt={props.property.title}
          className="property-thumbnail"
        />
        <img
          src={`https://springfieldbnb.s3.amazonaws.com/properties/${props.property.title}.png`}
          alt={props.property.title}
          className="property-thumbnail"
        />
      </div>
      <Link to={`/properties/${props.stateId}`} >
        <h1>{props.property.title.split('_').join(' ')}</h1>
      </Link>
      <p>beds: {props.property.beds}</p>
      <p>baths: {props.property.baths}</p>
      <p>{props.property.description}</p>
    </li>
  )
}

export default withRouter(ListingBox)