import * as bookingsApiUtil from '../utils/bookings_util'
import { history } from '../index' // ! where do I save this?
import { receiveErrors, receiveNotices } from './notices_actions'

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS"

export const receiveBookings = bookings  => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings: bookings
  }
}

export const getBookings = userId => dispatch => {
  return bookingsApiUtil.getBookings(userId)
  .then(bookings => {
    dispatch(receiveBookings(bookings))
  })
  .catch(err => {
    console.log('error getting bookings')
  })
}

export const postBooking = info => dispatch => {
  return bookingsApiUtil.postBooking(info)
  .then(madeBooking => {
    dispatch(receiveNotices({ 0: "Booking saved!" }))
    dispatch(receiveBookings([madeBooking.data]))
    return madeBooking
  })
  .then(madeBooking => {
    // history.push(`/properties/${madeBooking.data.property_id-1}`)  // can I just remove the 'book-me' part of the url?
    history.push(`/bookings/${madeBooking.data.id}`)  // can I just remove the 'book-me' part of the url?
  })
  .catch(err => {
    dispatch(receiveErrors({ 0: err.response.data[0] }))
  })
}