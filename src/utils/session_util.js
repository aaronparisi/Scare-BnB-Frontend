import { newAxiosIns } from "../axiosIns"

export const changeUserImageUrl = (userId, newImageUrl) => {
  return newAxiosIns({
    method: 'put',
    url: `/api/users/${userId}/update-image-url`,
    data: {
      userId: userId,
      newImageUrl: newImageUrl
    }
  })
}

export const getCurrentUser = () => {
  return newAxiosIns({
    method: 'get',
    url: '/api/users/current-user'
  })
}

// create a new user
export const postUser = user => {
  return newAxiosIns({
    method: 'post',
    url: '/api/users',
    data: { user },
  })
}

export const deleteUser = userId => {
  return newAxiosIns({
    method: 'delete',
    url: `/api/users/${userId}`
  })
}

// log a user in (create a session)
export const postSession = user => {
  return newAxiosIns({
    method: 'post',
    url: '/api/session',
    data: { user },
  })
}

// log out a user (delete a session)
export const deleteSession = () => {
  console.log('about to make newAxiosIns delete request')
  return newAxiosIns({
    method: 'delete',
    url: '/api/session'
  })
}