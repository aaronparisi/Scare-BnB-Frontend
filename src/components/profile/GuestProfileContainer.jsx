import { connect } from 'react-redux';
import GuestProfile from './GuestProfile'

const mapStateToProps = state => {
  return {
    user: state.session.currentUser,
    bookings: state.session.bookings
  }
}
 
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestProfile)