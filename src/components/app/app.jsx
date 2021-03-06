import React from 'react';
import '../../stylesheets/App.css';
import '../../stylesheets/reset.css';

import NavBarContainer from '../nav_bar/nav_bar_container'
import ListingsContainer from '../listings/ListingsContainer'
import FullListingContainer from '../listings/FullListingContainer'
import BookingFormContainer from '../bookings/BookingFormContainer'
import SignupContainer from '../session/signup_container'
import LoginContainer from '../session/login_container'
import HomeContainer from '../home/home_container'

import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../utils/route_util'

const App = () => {

  return (
    <div className="main-content">
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HomeContainer} />
      <ProtectedRoute exact path="/listings" component={ListingsContainer} />
      <ProtectedRoute path="/properties/*" component={FullListingContainer} />
      <ProtectedRoute path="/properties/*/book-me" component={BookingFormContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
    </div>
  )
}

export default App;
