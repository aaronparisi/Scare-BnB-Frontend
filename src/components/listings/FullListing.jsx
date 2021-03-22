import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import CarouselContainer from './CarouselContainer'

class FullListing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.ManagerLinkButton = this.ManagerLinkButton.bind(this)
  }

  componentDidMount() {
    this.props.fetchManager(this.props.property.manager_id)
  }

  ManagerLinkButton({ user, manager }) {
    if (manager.id === user.id) {
      return (
        <Link to={`/properties/${this.props.property.id}/manage`} >
          Manage Property!
        </Link>
      )
    } else {
      return null
    }
  }

  render() {
    if (this.props.property === undefined) {
      return null
    } else {
      
      return (
        <div className="full-listing">
          <CarouselContainer propertyId={this.props.property.id} />
          <this.ManagerLinkButton user={this.props.currentUser} manager={this.props.manager} />

          <h1>{this.props.property.title.split('_').join(' ')}</h1>
          <p>beds: {this.props.property.beds}</p>
          <p>baths: {this.props.property.baths}</p>
          <p>{this.props.property.description}</p>

          <p>
            Manager: <Link to={`/users/${this.props.manager.id}/manager-profile`} >{this.props.manager.username}</Link>
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