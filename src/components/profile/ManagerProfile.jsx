import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const ManagerProfile = props => {

  return (
    <div className="yellow-container manager-profile">
      <h1>{props.manager.username}</h1>
      <p>Rating: {props.manager.host_rating}</p>
      <Link to={`/listings/${props.manager.id}`} >
        Check out their properties!
      </Link>
    </div>
  )
}

export default withRouter(ManagerProfile)