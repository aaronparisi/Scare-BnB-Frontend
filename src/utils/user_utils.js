import { newAxiosIns } from "../axiosIns"

export const deleteUserAvatar = userId => {
  return newAxiosIns({
    method: 'put',
    url: `/api/users/${userId}/destroy-avatar`
  })
}

export const addUserAvatar = (userId, guestInfo) => {
  return newAxiosIns({
    method: 'put',
    url: `/api/users/${userId}/add-avatar`,
    data: guestInfo,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(data => data.data)
}

export const updateUserAvatar = (userId, guestInfo) => {
  deleteUserAvatar(userId)
  .then(data => addUserAvatar(userId, guestInfo))
}

// ##############################################################################
// 
// 
// ooo. .oo.  .oo.    .oooo.   ooo. .oo.    .oooo.    .oooooooo  .ooooo.  oooo d8b
// `888P"Y88bP"Y88b  `P  )88b  `888P"Y88b  `P  )88b  888' `88b  d88' `88b `888""8P
//  888   888   888   .oP"888   888   888   .oP"888  888   888  888ooo888  888
//  888   888   888  d8(  888   888   888  d8(  888  `88bod8P'  888    .o  888
// o888o o888o o888o `Y888""8o o888o o888o `Y888""8o `8oooooo.  `Y8bod8P' d888b
//                                                   d"     YD
//                                                   "Y88888P'
// 
// ##############################################################################

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