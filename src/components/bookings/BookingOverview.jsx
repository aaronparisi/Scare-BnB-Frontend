import React from 'react'
import { Link } from 'react-router-dom';

const BookingOverview = props => {
  if (props.property != undefined) {
    return (
      <div className="booking-overview">
        <h1>Your booking at {props.property.title}</h1>
        <p>Start Date: {props.booking.start_date}</p>
        <p>End Date: {props.booking.end_date}</p>

        <Link className="btn" to="/profile">
          Back to your profile
        </Link>
      </div>
    )
  } else {
    return (
      <div className="booking-overview">
        
        <Link className="btn" to="/profile">
          Back to your profile
        </Link>
      </div>
    )
  }
}

export default BookingOverview