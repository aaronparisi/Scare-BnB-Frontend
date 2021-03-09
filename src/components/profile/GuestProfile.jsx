import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const GuestProfile = props => {
  return (
    <div className="user-profile">
      <h1>{props.user.username}</h1>
      <img src={`https://springfieldbnb.s3.amazonaws.com/avatars/${props.user.username}.png`} alt={props.user.username}/>

      <h2>Bookings</h2>
      <ul className="bookings-list">
        {props.bookings.map((booking, idx) => {
          return (
            <li className="booking-list-item" key={idx}>
              <Link to={`/bookings/${booking.id}`} >
                {booking.propertyTitle}
              </Link>
            </li>
          )
        })}

        <h2>Guest Rating</h2>
        <p>{props.user.guest_rating}</p>
      </ul>
    </div>
  )
}

export default withRouter(GuestProfile)