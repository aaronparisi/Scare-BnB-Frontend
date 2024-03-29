import axios from 'axios'

const baseUrl = (process.env.NODE_ENV === 'production') ? 'https://springfield-bnb-api.herokuapp.com/' : 'http://localhost:3000'
// const baseUrl = 'http://localhost:3000'

export const newAxiosIns = params => {
  // params will be a hash of various headers
  // const { realToken, fakeToken } = getCSRFToken()
  const defaultParams = {
    baseURL: baseUrl,
    withCredentials: true,
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // }
  }
  
  const axiosIns = axios.create(defaultParams)
  
  return axiosIns(params)
}