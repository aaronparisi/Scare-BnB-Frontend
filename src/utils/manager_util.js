import axios from "axios"

export const fetchManager = managerId => {
  return axios({
    method: 'get',
    url: `/api/users/${managerId}`
  })
}

export const addManagerRating = (managerId, guestId, newRating) => {
  return axios ({
    method: 'put',
    url: `/api/users/${managerId}/add-manager-rating`,
    data: {
      rating: {
        manager_id: managerId,
        guest_id: guestId,
        rating: newRating
      }
    }
  })
}