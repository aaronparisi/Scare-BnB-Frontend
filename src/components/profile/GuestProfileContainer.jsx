import { connect } from 'react-redux';
import GuestProfile from './GuestProfile'

const mapStateToProps = state => {
  let propsArray = Object.values(state.properties)

  let bookingsPlus = state.bookings.map(booking => {
    const title = (propsArray.length > 0) ? propsArray.filter(prop => prop.id === booking.property_id)[0].title : 'no title'
    return {
      ...booking,
      propertyTitle: title
    }
  })
  
  return {
    user: state.session.currentUser,
    bookings: bookingsPlus
  }
}
 
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestProfile)