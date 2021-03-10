import { RECEIVE_BOOKINGS, ADD_BOOKING } from '../actions/booking_actions'

const _emptyBookings = []

const bookingsReducer = (state = _emptyBookings, action) => {
  Object.freeze(state)

  switch(action.type) {
    case ADD_BOOKING:
      const newBookings = state.bookings;
      action.bookings.forEach(booking => newBookings.push(booking))
      return newBookings;
    case RECEIVE_BOOKINGS:
      return action.bookings
    default:
      return state;
  }
}

export default bookingsReducer