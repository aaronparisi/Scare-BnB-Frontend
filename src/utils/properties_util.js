import { newAxiosIns } from "../axiosIns"

export const getProperties = criteria => {
  // ? what happens with the criteria???
  return newAxiosIns({
    method: 'get',
    url: '/api/properties'
  })
}
// data: { criteria }

export const postProperty = propInfo => {
  return newAxiosIns({
    method: 'post',
    url: 'api/properties',
    data: propInfo,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const deleteProperty = propId => {
  return newAxiosIns({
    method: 'delete',
    url: `api/properties/${propId}`
  })
}

export const postAddress = address => {
  return newAxiosIns({
    method: 'post',
    url: 'api/addresses',
    data: {
      address: address
    }
  })
}

export const deletePropertyImage = (propId, imgId) => {
  return newAxiosIns({
    method: 'put',
    url: `api/properties/${propId}/destroy-image/${imgId}`
  })
}

export const addPropertyImage = (propId, img) => {
  return newAxiosIns({
    method: 'put',
    url: `api/properties/${propId}/add-image`,
    data: {
      img
    }
  })
}