import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import Ratings from 'react-ratings-declarative'

class ManagerProfile extends React.Component {
  constructor(props) {
    super(props)

    this.changeRating = this.changeRating.bind(this)
  }

  componentDidMount() {
    this.props.fetchManager(parseInt(this.props.match.params[0]))
  }

  changeRating = newRating => {
    if (this.props.madeRating === undefined) {
      // first time this user is rating this manager
      console.log('adding new rating')
      this.props.addManagerRating(this.props.manager.id, this.props.currentUser.id, newRating)
    } else {
      // we are updating a user rating
      console.log('updating existing rating')
      this.props.updateManagerRating(this.props.manager.id, this.props.currentUser.id, newRating)
    }
  }

  render() {
    if (this.props.manager.id === undefined) {  // ! this check is weird
      return null
    } else {
      return (
        <div className="yellow-container manager-profile">
          <img 
            src={`https://springfieldbnb.s3.amazonaws.com/avatars/${this.props.manager.username}.png`} 
            alt={this.props.manager.username}
          />
          <h1>{this.props.manager.username}</h1>
          <h2>Manager Rating</h2>
          <Ratings
            rating={parseFloat(this.props.manager.manager_rating)}
            widgetRatedColors="blue"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>

          <h2>Rate this manager!</h2>
          <Ratings
            rating={this.props.madeRating || 0}
            widgetRatedColors="yellow"
            changeRating={this.changeRating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
    
          <Link to={`/listings/${this.props.manager.id}`} >
            Check out their properties!
          </Link>
    
    
        </div>
      )
    }
  }
}

export default withRouter(ManagerProfile)