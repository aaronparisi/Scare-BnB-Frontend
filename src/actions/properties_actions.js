import * as propertiesApiUtil from '../utils/properties_util'

export const RECEIVE_PROPERTIES = "RECEIVE_PROPERTIES"
export const RECEIVE_CURRENT_PROPERTY = "RECEIVE_CURRENT_PROPERTY"
export const ADD_PROPERTY = "ADD_PROPERTY"
export const ADD_ADDRESS_TO_PROPERTY = "ADD_ADDRESS_TO_PROPERTY"

export const receiveProperties = properties => {
  return {
    type: RECEIVE_PROPERTIES,
    properties
  }
}

export const addProperty = property => {
  return {
    type: ADD_PROPERTY,
    property: property
  }
}

export const addAddressToProperty = address => {
  return {
    type: ADD_ADDRESS_TO_PROPERTY,
    address: address
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

export const postProperty = propInfo => dispatch => {
  return propertiesApiUtil.postProperty(propInfo)
  .then(
    property => {
      // ! problem here is property does not have address when post returns....
      dispatch(addProperty(property.data))
      return property
    },
    err => {
      console.log('error posting property')
    }
  )
}

export const postAddress = address => dispatch => {
  return propertiesApiUtil.postAddress(address)
  .then(address => {
    dispatch(addAddressToProperty(address)) 
    return address
  })
  .catch(err => {
    console.log(`error posting address`)
  })
}