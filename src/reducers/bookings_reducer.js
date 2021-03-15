import { RECEIVE_USER_BOOKINGS, RECEIVE_PROPERTY_BOOKINGS, ADD_USER_BOOKING, REMOVE_USER_BOOKING } from '../actions/booking_actions'

const _emptyBookings = {
  userBookings: [],
  propertyBookings: []
}

const bookingsReducer = (state = _emptyBookings, action) => {
  Object.freeze(state)

  switch(action.type) {
    case ADD_USER_BOOKING:
      let addedUserBookings = state.userBookings.slice();
      action.bookings.forEach(booking => addedUserBookings.push(booking))
      return Object.assign({}, state, { userBookings: addedUserBookings })
    case RECEIVE_USER_BOOKINGS:
      return Object.assign({}, state, { userBookings: action.bookings })
    case RECEIVE_PROPERTY_BOOKINGS:
      return Object.assign({}, state, { propertyBookings: action.bookings })
    case REMOVE_USER_BOOKING:
      let removedUserBookings = {};
      Object.values(state.userBookings).forEach((booking, idx) => {
        if (booking.id !== action.booking.id) {
          removedUserBookings[idx] = booking;
        }
      })
      return Object.assign({}, state, { userBookings: removedUserBookings })
    default:
      return state;
  }
}

export default bookingsReducer