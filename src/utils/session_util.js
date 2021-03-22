import { axiosIns } from "../index"

export const changeUserImageUrl = (userId, newImageUrl) => {
  return axiosIns({
    method: 'put',
    url: `/api/users/${userId}/update-image-url`,
    data: {
      userId: userId,
      newImageUrl: newImageUrl
    }
  })
}

export const getCurrentUser = () => {
  return axiosIns({
    method: 'get',
    url: '/api/users/current-user',
  })
}

// create a new user
export const postUser = user => {
  return axiosIns({
    method: 'post',
    url: '/api/users',
    data: { user },
  })
}

// log a user in (create a session)
export const postSession = user => {
  return axiosIns({
    method: 'post',
    url: '/api/session',
    data: { user },
  })
}

// log out a user (delete a session)
export const deleteSession = () => {
  console.log('about to make axiosIns delete request')
  return axiosIns({
    method: 'delete',
    url: '/api/session'
  })
}