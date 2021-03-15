import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const BookingDetails = ({ property, booking }) => {
  const formatDate = date => {
    return new Date(date).toDateString() + " @ 4pm"
  }

  if (property != undefined) {
    return (
      <div className="booking-details">
        <h1>
          Your booking at <Link to={`/properties/${property.id-1}`} >{property.title}</Link>
        </h1>
        <p>Your check in time is: {formatDate(booking.start_date)}</p>
        <p>Your check out time is: {formatDate(booking.end_date)}</p>


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
    <div className="booking-overview yellow-container">
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

export default withRouter(BookingOverview)