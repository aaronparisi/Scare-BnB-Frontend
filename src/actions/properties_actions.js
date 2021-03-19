import * as propertiesApiUtil from '../utils/properties_util'

export const RECEIVE_PROPERTIES = "RECEIVE_PROPERTIES"
export const RECEIVE_CURRENT_PROPERTY = "RECEIVE_CURRENT_PROPERTY"

export const receiveProperties = properties => {
  return {
    type: RECEIVE_PROPERTIES,
    properties
  }
}

// thunk stuff

export const getProperties = criteria => dispatch => {
  return propertiesApiUtil.getProperties(criteria)
  .then(
    properties => {
      dispatch(receiveProperties(properties.data))
    },
    err => {
      console.log('error getting properties')
    }
  )
}