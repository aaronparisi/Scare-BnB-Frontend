import axios from "axios"

export const postBooking = info => {
  return axios({
    method: 'post',
    url: '/api/bookings',
    data: info
  })
}