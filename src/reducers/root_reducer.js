import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer'
import bookingsReducer from './bookings_reducer'
import propertiesReducer from './properties_reducer'
import noticesReducer from './notices_reducer'
import managerReducer from './manager_reducer'

export default combineReducers({
  // entities: entitiesReducer,
  properties: propertiesReducer,
  session: sessionReducer,
  bookings: bookingsReducer,
  notices: noticesReducer,
  manager: managerReducer
});
