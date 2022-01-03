import { connect } from 'react-redux';
import { deleteUser, receiveCurrentUser, h } from '../../actions/session_actions';
import { deleteUserAvatar, addUserAvatar } from '../../utils/user_utils';
import GuestProfile from './GuestProfile'

const mapStateToProps = state => {
  let propsArray = state.properties
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
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
    deleteUser: userId => dispatch(deleteUser(userId)),
    addUserAvatar: (userId, avatar) => addUserAvatar(userId, avatar),
    deleteUserAvatar: userId => deleteUserAvatar(userId)
    // not sure if I need these as props or if I can just import them
    // directly into the component, since there's no dispatching...
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestProfile)