import { axiosIns } from "../index"

export const getBookings = userId => {
  return axiosIns({
    method: 'get',
    url: `/api/users/${userId}/bookings`
  })
}

export const getBookingsByProperty = propertyId => {
  return axiosIns({
    method: 'get',
    url: `/api/properties/${propertyId}/bookings`
  })
}

export const postBooking = info => {
  return axiosIns({
    method: 'post',
    url: '/api/bookings',
    data: info
  })
}

export const deleteBooking = bookingId => {
  return axiosIns ({
    method: 'delete',
    url: `/api/bookings/${bookingId}`
  })
}