import axios from "axios"

export const getProperties = criteria => {
  return axios({
    method: 'get',
    url: '/api/properties',
    withCredentials: 'include',
  })
}
// data: { criteria }