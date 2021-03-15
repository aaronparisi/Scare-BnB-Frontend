import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';

class FullListing extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchManager(this.props.property.manager_id)
  }

  render() {
    if (this.props.property == undefined) {
      // return <p>no current property</p>;
      return null
    } else {
      return (
        <div className="full-listing">
          <div className="carousel">
            <div className="carousel-box">
              <img
                src={`https://springfieldbnb.s3.amazonaws.com/properties/${this.props.property.title}/0.png`}
                alt={this.props.property.title}
                className="property-thumbnail"
              />
            </div>
            <div className="carousel-box">
              <img
                src={`https://springfieldbnb.s3.amazonaws.com/properties/${this.props.property.title}/0.png`}
                alt={this.props.property.title}
                className="property-thumbnail"
              />
            </div>
            <div className="carousel-box">
              <img
                src={`https://springfieldbnb.s3.amazonaws.com/properties/${this.props.property.title}/0.png`}
                alt={this.props.property.title}
                className="property-thumbnail"
              />
            </div>
          </div>
          <h1>{this.props.property.title.split('_').join(' ')}</h1>
          <p>beds: {this.props.property.beds}</p>
          <p>baths: {this.props.property.baths}</p>
          <p>{this.props.property.description}</p>

          <p>
            Manager: <Link to={`/manager/${this.props.manager.id}`} >{this.props.manager.username}</Link>
          </p>
    
          <Link to={`${this.props.match.url}/book-me`} >
            <h1>Book me!</h1>
          </Link>
    
          <Link to="/listings" >
            <h1>Back</h1>
          </Link>
        </div>
      )
    }
  }
}

export default withRouter(FullListing)