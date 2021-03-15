import * as bookingsApiUtil from '../utils/bookings_util'
import { receiveErrors, receiveNotices } from './notices_actions'

export const RECEIVE_USER_BOOKINGS = "RECEIVE_USER_BOOKINGS"
export const RECEIVE_PROPERTY_BOOKINGS = "RECEIVE_PROPERTY_BOOKINGS"
export const ADD_USER_BOOKING = "ADD_USER_BOOKING"
export const REMOVE_USER_BOOKING = "REMOVE_USER_BOOKING"

export const receiveUserBookings = bookings  => {
  return {
    type: RECEIVE_USER_BOOKINGS,
    bookings: bookings
  }
}

export const receivePropertyBookings = bookings  => {
  return {
    type: RECEIVE_PROPERTY_BOOKINGS,
    bookings: bookings
  }
}

export const addUserBooking = booking  => {
  return {
    type: ADD_USER_BOOKING,
    bookings: [booking]
  }
}

export const removeUserBooking = booking => {
  return {
    type: REMOVE_USER_BOOKING,
    booking: booking
  }
}

export const getBookingsByUser = userId => dispatch => {
  return bookingsApiUtil.getBookings(userId)
  .then(bookings => {
    dispatch(receiveUserBookings(bookings.data))
  })
  .catch(err => {
    console.log('error getting user bookings')
  })
}

export const getBookingsByProperty = propertyId => dispatch => {
  return bookingsApiUtil.getBookingsByProperty(propertyId)
  .then(bookings => {
    dispatch(receivePropertyBookings(bookings.data))
  })
  .catch(err => {
    console.log('error getting property bookings')
  })
}

export const postBooking = info => dispatch => {
  return bookingsApiUtil.postBooking(info)
  .then(madeBooking => {
    dispatch(receiveNotices({ 0: "Booking saved!" }))
    dispatch(addUserBooking(madeBooking.data))
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
    dispatch(removeUserBooking(deletedBooking.data))
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