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