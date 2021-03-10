import * as bookingsApiUtil from '../utils/bookings_util'
import { receiveErrors, receiveNotices } from './notices_actions'

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS"
export const ADD_BOOKING = "ADD_BOOKING"
export const REMOVE_BOOKING = "REMOVE_BOOKING"

export const receiveBookings = bookings  => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings: bookings
  }
}

export const addBooking = booking  => {
  return {
    type: ADD_BOOKING,
    bookings: [booking]
  }
}

export const removeBooking = booking => {
  return {
    type: REMOVE_BOOKING,
    booking: booking
  }
}

export const getBookings = userId => dispatch => {
  return bookingsApiUtil.getBookings(userId)
  .then(bookings => {
    dispatch(receiveBookings(bookings.data))
  })
  .catch(err => {
    console.log('error getting bookings')
  })
}

export const getBookingsByProperty = propertyId => dispatch => {
  return bookingsApiUtil.getBookingsByProperty(propertyId)
  .then(bookings => {
    dispatch(receiveBookings(bookings.data))
  })
  .catch(err => {
    console.log('error getting bookings')
  })
}

export const postBooking = info => dispatch => {
  return bookingsApiUtil.postBooking(info)
  .then(madeBooking => {
    dispatch(receiveNotices({ 0: "Booking saved!" }))
    dispatch(addBooking(madeBooking.data))
    return madeBooking
  })
  // .then(madeBooking => {
  //   // history.push(`/properties/${madeBooking.data.property_id-1}`)  // can I just remove the 'book-me' part of the url?
  //   history.push(`/bookings/${madeBooking.data.id}`)  // can I just remove the 'book-me' part of the url?
  // })
  // ? handle this in the component's handleSubmit method?
  .catch(err => {
    dispatch(receiveErrors({ 0: err.response.data[0] }))
  })
}

export const deleteBooking = bookingId => dispatch => {
  return bookingsApiUtil.deleteBooking(bookingId)
  .then(deletedBooking => {
    dispatch(removeBooking(deletedBooking.data))
    dispatch(receiveNotices({ 0: "Booking deleted!" }))
    return deleteBooking
  })
  // .then(() => {
  //   history.push('/profile')
  // })
  // ? this may be necessary if I can't make the cancel button a <Link />
  .catch(err => {
    console.log('error deleting booking')
  })
}