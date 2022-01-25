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

export const addPropertyImage = (propId, formData) => {
  return newAxiosIns({
    method: 'put',
    url: `api/properties/${propId}/add-image`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const exchangeImageIdsForS3Urls = (imgIds) => {
  // given array of image ids,
  // returns an array of s3 urls
  return newAxiosIns({
    method: 'get',
    url: `/api/exchange-image-ids-for-s3-urls`,
    params: {
      blob_ids: imgIds
    }
  })
  .then(response => {
    console.log(`backend returned s3 urls`)
    console.log(response)
    return response.data
  })
  .catch(err => {
    console.log('there was an error exchanging id for s3 url')
    console.log(err)
  })
}