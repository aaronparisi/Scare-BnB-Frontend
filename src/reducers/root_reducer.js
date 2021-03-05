import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer'
import propertiesReducer from './properties_reducer'

export default combineReducers({
  // entities: entitiesReducer,
  properties: propertiesReducer,
  session: sessionReducer
});
