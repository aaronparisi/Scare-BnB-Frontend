import * as propertiesApiUtil from '../utils/properties_util'
import * as awsUtil from '../utils/aws_util'

export const RECEIVE_PROPERTIES = "RECEIVE_PROPERTIES"
export const RECEIVE_CURRENT_PROPERTY = "RECEIVE_CURRENT_PROPERTY"
export const ADD_PROPERTY = "ADD_PROPERTY"
export const ADD_ADDRESS_TO_PROPERTY = "ADD_ADDRESS_TO_PROPERTY"
export const REMOVE_PROPERTY = "REMOVE_PROPERTY"

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

export const removeProperty = propId => {
  return {
    type: REMOVE_PROPERTY,
    propId: propId
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
  // add prop to api
  return propertiesApiUtil.postProperty(propInfo)
  .then(
    property => {
      // uploaded to s3 in host form component....

      // add prop to redux state
      dispatch(addProperty(property.data))
      return property
    },
    err => {
      console.log('error posting property')
    }
  )
}

export const deleteProperty = propId => dispatch => {
  // remove property from rails api
  return propertiesApiUtil.deleteProperty(propId)
  .then(property => {
    // remove property from s3 bucket done in manage listing component

    // remove property from redux state
    dispatch(removeProperty(property.data.id))
  })
  .catch(err => {
    console.log('error deleting property')
  })
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