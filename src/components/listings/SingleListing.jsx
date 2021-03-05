import React, { useState } from 'react'

const SingleListing = props => {
  return (
    <li className="listing">
      <div className="property-images">
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
      <h1>{props.property.title.split('_').join(' ')}</h1>
      <p>beds: {props.property.beds}</p>
      <p>baths: {props.property.baths}</p>
      <p>{props.property.description}</p>
    </li>
  )
}

export default SingleListing