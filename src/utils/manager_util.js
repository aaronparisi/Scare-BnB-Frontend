import { axiosIns } from "../index"

export const fetchManager = managerId => {
  return axiosIns({
    method: 'get',
    url: `/api/users/${managerId}/manager`
  })
}

export const addManagerRating = (managerId, guestId, newRating) => {
  return axiosIns ({
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
  return axiosIns ({
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