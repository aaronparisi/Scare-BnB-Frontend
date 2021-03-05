import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const SingleListing = props => {
  return (
    <li className="listing">
      <AliceCarousel 
        className="property-images"
        disableDotsControls={true}
        mouseTracking={true}
        
      >
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
      </AliceCarousel>
      <h1>{props.property.title.split('_').join(' ')}</h1>
      <p>beds: {props.property.beds}</p>
      <p>baths: {props.property.baths}</p>
      <p>{props.property.description}</p>
    </li>
  )
}

export default SingleListing