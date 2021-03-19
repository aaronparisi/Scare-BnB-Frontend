import { connect } from 'react-redux';
import { setCurrentUserAvatar } from '../../actions/session_actions';
import GuestProfile from './GuestProfile'

const mapStateToProps = state => {
  let propsArray = Object.values(state.properties)
  // debugger
  let bookingsPlus = state.bookings.userBookings
  .filter(booking => booking.guest_id === state.session.currentUser.id)
  .map(booking => {
    const title = (propsArray.length > 0) ? propsArray.filter(prop => prop.id === booking.property_id)[0].title : 'no title'
    
    return {
      startDate: booking.start_date,
      endDate: booking.end_date,
      title: title,
      id: booking.id
    }
  })
  
  return {
    user: state.session.currentUser,
    bookings: bookingsPlus
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUserAvatar: (id, url) => dispatch(setCurrentUserAvatar(id, url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestProfile)