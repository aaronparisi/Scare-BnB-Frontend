import { connect } from 'react-redux'
import BookingOverview from './BookingOverview'

const mapStateToProps = (state, ownProps) => {
  const booking = state.bookings.filter(booking => booking.id === parseInt(ownProps.match.params[0]))[0]
  const property = Object.values(state.properties).filter(prop => prop.id === booking.property_id)[0]

  return {
    booking: booking,
    property: property
  }
}

const mapDispatchToProps = dispatch => {
  // we'll need to be able to cancel (and ideally adjust) booking info
  // or maybe just redirect to the booking form?
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingOverview)