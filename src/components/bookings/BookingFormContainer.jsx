import { connect } from 'react-redux'
import BookingForm from './BookingForm'
import { postBooking } from '../../actions/booking_actions'
import { getBookingsByProperty } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const property = state.properties[parseInt(ownProps.match.params[0])]
  const conflictDates = [];
  
  state.bookings.propertyBookings.forEach(booking => {
    let curDate = new Date(booking.start_date);
    while (curDate <= new Date(booking.end_date)) {
      conflictDates.push(new Date(curDate).toJSON().slice(0, 10))

      curDate = new Date(curDate.setDate(curDate.getDate()+1))
    }
  })
  
  return {
    property: property,
    guestId: state.session.currentUser.id,
    conflictDates: conflictDates
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postBooking: info => dispatch(postBooking(info)),
    getBookingsByProperty: propId => dispatch(getBookingsByProperty(propId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)