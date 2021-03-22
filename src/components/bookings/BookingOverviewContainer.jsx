import { connect } from 'react-redux'
import { deleteBooking } from '../../actions/booking_actions'
import BookingOverview from './BookingOverview'

const mapStateToProps = (state, ownProps) => {
  const booking = state.bookings.userBookings.filter(booking => booking.id === parseInt(ownProps.match.params[0]))[0]
  const property = (booking === undefined) ? (
    undefined
  ) : (
    state.properties.filter(prop => prop.id === booking.property_id)[0]
  )
  
  return {
    booking: booking,
    property: property
  }
}

const mapDispatchToProps = dispatch => {
  // we'll need to be able to cancel (and ideally adjust) booking info
  // or maybe just redirect to the booking form?
  return {
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingOverview)