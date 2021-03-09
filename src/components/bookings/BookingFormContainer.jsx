import { connect } from 'react-redux'
import BookingForm from './BookingForm'
import { postBooking } from '../../actions/booking_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    property: state.properties[parseInt(ownProps.match.params[0])],
    guestId: state.session.currentUser.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postBooking: info => dispatch(postBooking(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)