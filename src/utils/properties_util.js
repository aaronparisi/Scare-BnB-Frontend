import { axiosIns } from "../index"

export const getProperties = criteria => {
  return axiosIns({
    method: 'get',
    url: '/api/properties'
  })
}
// data: { criteria }

export const postProperty = propInfo => {
  return axiosIns({
    method: 'post',
    url: 'api/properties',
    data: {
      property: propInfo
    }
  })
}

export const postAddress = address => {
  return axiosIns({
    method: 'post',
    url: 'api/addresses',
    data: {
      address: address
    }
  })
}