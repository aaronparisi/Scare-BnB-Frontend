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