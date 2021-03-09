import * as bookingsApiUtil from '../utils/bookings_util'
import { history } from '../index' // ! where do I save this?
import { receiveErrors, receiveNotices } from './notices_actions'

export const postBooking = info => dispatch => {
  return bookingsApiUtil.postBooking(info)
  .then(madeBooking => {
    dispatch(receiveNotices({ 0: "Booking saved!" }))
    return madeBooking
  })
  .then(madeBooking => {
    history.push(`/properties/${madeBooking.data.property.id-1}`)  // can I just remove the 'book-me' part of the url?
  })
  .catch(err => {
    dispatch(receiveErrors({ 0: err.response.data[0] }))
  })
}