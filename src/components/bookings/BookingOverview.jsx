import React from 'react'
import { Link } from 'react-router-dom';

const BookingDetails = ({ property, booking }) => {
  if (property != undefined) {
    return (
      <div className="booking-details">
        <h1>Your booking at {property.title}</h1>
        <p>Start Date: {booking.start_date}</p>
        <p>End Date: {booking.end_date}</p>
      </div>
    )
  } else {
    return (
      <div className="booking-details">
        
      </div>
    )
  }
}

const BookingOverview = props => {
  
  return (
    <div className="booking-overview">
      <BookingDetails property={props.property} booking={props.booking} />

      <Link
        className="btn cancel-booking-btn"
        onClick={e => props.deleteBooking(parseInt(props.match.params[0]))}
        to="/profile"
      >
        Cancel Booking
      </Link>

      <Link className="btn" to="/profile">
        Back to your profile
      </Link>
    </div>
  )
}

export default BookingOverview