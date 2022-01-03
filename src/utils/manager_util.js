import { newAxiosIns } from "../axiosIns"

export const fetchManager = managerId => {
  return newAxiosIns({
    method: 'get',
    url: `/api/users/${managerId}/manager`
  })
}

export const addManagerRating = (managerId, guestId, newRating) => {
  return newAxiosIns ({
    method: 'post',
    url: `/api/ratings/add-manager-rating`,
    data: {
      rating: {
        manager_id: managerId,
        guest_id: guestId,
        rating: newRating
      }
    }
  })
}

export const updateManagerRating = (managerId, guestId, newRating) => {
  return newAxiosIns ({
    method: 'put',
    url: `/api/ratings/update-manager-rating`,
    data: {
      rating: {
        manager_id: managerId,
        guest_id: guestId,
        rating: newRating
      }
    }
  })
}