import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_BOOKINGS } from '../actions/booking_actions'

const _nullSession = {
  currentUser: null,
  bookings: []
}

const sessionsReducer = (state = _nullSession, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user})
    case LOGOUT_CURRENT_USER:
      return _nullSession
    case RECEIVE_BOOKINGS:
      const newBookings = state.bookings;
      action.bookings.forEach(booking => newBookings.push(booking))
      return Object.assign({}, state, { bookings: newBookings })
    default:
      return state;
  }
}

export default sessionsReducer