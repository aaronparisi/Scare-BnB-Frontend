import { RECEIVE_PROPERTIES } from '../actions/properties_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _emptyProperties = {
  properties: []
}

const propertiesReducer = (state = _emptyProperties, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_PROPERTIES:
      return Object.assign({}, action.properties)
    case LOGOUT_CURRENT_USER:
      return _emptyProperties
    default:
      return state;
  }
}

export default propertiesReducer