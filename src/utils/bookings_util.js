import { newAxiosIns } from "../axiosIns"

export const getBookings = userId => {
  return newAxiosIns({
    method: 'get',
    url: `/api/users/${userId}/bookings`
  })
}

export const getBookingsByProperty = propertyId => {
  return newAxiosIns({
    method: 'get',
    url: `/api/properties/${propertyId}/bookings`
  })
}

export const postBooking = info => {
  return newAxiosIns({
    method: 'post',
    url: '/api/bookings',
    data: info
  })
}

export const deleteBooking = bookingId => {
  return newAxiosIns ({
    method: 'delete',
    url: `/api/bookings/${bookingId}`
  })
}