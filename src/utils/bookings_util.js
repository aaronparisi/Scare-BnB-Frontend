import axios from "axios"

export const getBookings = userId => {
  return axios({
    method: 'get',
    url: `/api/users/${userId}/bookings`
  })
}

export const getBookingsByProperty = propertyId => {
  return axios({
    method: 'get',
    url: `/api/properties/${propertyId}/bookings`
  })
}

export const postBooking = info => {
  return axios({
    method: 'post',
    url: '/api/bookings',
    data: info
  })
}

export const deleteBooking = bookingId => {
  return axios ({
    method: 'delete',
    url: `/api/bookings/${bookingId}`
  })
}