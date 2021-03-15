import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import Ratings from 'react-ratings-declarative'

class ManagerProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.changeRating = this.changeRating.bind(this)
  }

  componentDidMount() {
    this.props.fetchManager(parseInt(this.props.match.params[0]))
  }

  changeRating = newRating => {
    this.props.addManagerRating(this.props.manager.id, this.props.currentUserId, newRating)
  }

  render() {
    if (this.props.manager.id === undefined) {  // ! this check is weird
      return null
    } else {
      return (
        <div className="yellow-container manager-profile">
          <h1>{this.props.manager.username}</h1>
          <Ratings
            // rating={this.props.manager.manager_rating}
            rating={parseFloat(this.props.manager.manager_rating)}
            widgetRatedColors="blue"
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