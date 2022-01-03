import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.css'
import AppContainer from './components/app/app_container';
import createStore from './store/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'

import { fetchCurrentUser } from './actions/session_actions'
import { getProperties } from './actions/properties_actions';
import { receiveUserBookings } from './actions/booking_actions';

const store = createStore()
export const history = createBrowserHistory()

fetchCurrentUser()(store.dispatch)
.then(info => {
  if (info.data.bookings !== undefined) {
    return store.dispatch(receiveUserBookings(info.data.bookings))
  }
})
.then(() => {
  // ? the properties get loaded into state even if someone is not logged in
  return getProperties()(store.dispatch)
})
.then(
  msg => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <AppContainer />
          </Router>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  },
  err => {
    console.log(err)
  }
)
