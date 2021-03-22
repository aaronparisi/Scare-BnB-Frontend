import { RECEIVE_PROPERTIES, ADD_PROPERTY, ADD_ADDRESS_TO_PROPERTY } from '../actions/properties_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _emptyProperties = []

const propertiesReducer = (state = _emptyProperties, action) => {
  Object.freeze(state)
  
  switch(action.type) {
    case RECEIVE_PROPERTIES:
      return action.properties
    case LOGOUT_CURRENT_USER:
      return _emptyProperties
    case ADD_PROPERTY:
      const addedProp = state.slice()
      addedProp.push(action.property)
      return addedProp
    case ADD_ADDRESS_TO_PROPERTY:
      const addedAddress = state.slice()
      const ret =  addedAddress.map(prop => {
        if (prop.id === action.address.data.property_id) {
          return Object.assign({}, prop, { address: action.address.data })
        } else {
          return prop
        }
      })
      return ret
    default:
      return state;
  }
}

export default propertiesReducer