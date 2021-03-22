import { connect } from 'react-redux'
import { getBookingsByProperty } from '../../actions/booking_actions'
import { deleteProperty } from '../../actions/properties_actions'
import ManageListing from './ManageListing'

const mapStateToProps = (state, ownProps) => {
  return {
    property: state.properties.filter(prop => prop.id === parseInt(ownProps.match.params[0]))[0],
    bookings: state.bookings.propertyBookings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBookingsByProperty: propId => dispatch(getBookingsByProperty(propId)),
    deleteProperty: propId => dispatch(deleteProperty(propId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListing)