import * as propertiesApiUtil from '../utils/properties_util'
import { history } from '../index'

export const RECEIVE_PROPERTIES = "RECEIVE_PROPERTIES"

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
      history.push('/listings')  // todo specify post login redirect
    },
    err => {
      console.log('error getting properties')
    }
  )
}