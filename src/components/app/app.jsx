import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container'
import ListingsContainer from '../listings/ListingsContainer'
import FullListingContainer from '../listings/FullListingContainer'
import BookingFormContainer from '../bookings/BookingFormContainer'
import SignupContainer from '../session/signup_container'
import LoginContainer from '../session/login_container'
import HomeContainer from '../home/home_container'
import ManagerProfileContainer from '../profile/ManagerProfileContainer'
import ManageListingContainer from '../listings/ManageListingContainer'

import { Route } from 'react-router-dom'
import { AuthRoute, ManagerBoolRoute, ProtectedRoute, ThisLoggedInBoolRoute } from '../../utils/route_util'
import GuestProfileContainer from '../profile/GuestProfileContainer';
import BookingOverviewContainer from '../bookings/BookingOverviewContainer';
import HostFormContainer from '../listings/HostFormContainer'

const App = () => {

  return (
    <div className="main-content">
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HomeContainer} />

      <ProtectedRoute exact path="/listings" component={ListingsContainer} />
      <ProtectedRoute exact path="/listings/*" component={ListingsContainer} />

      <ProtectedRoute path="/properties/*" component={FullListingContainer} />
      <ManagerBoolRoute path="/properties/*/manage" component={ManageListingContainer} />
      <ProtectedRoute path="/properties/*/book-me" component={BookingFormContainer} />
      
      <ThisLoggedInBoolRoute exact path="/users/*/guest-profile" component={GuestProfileContainer} />
      <ProtectedRoute exact path="/users/*/manager-profile" component={ManagerProfileContainer} />
      <ProtectedRoute path="/bookings/*" component={BookingOverviewContainer} />
      
      <ProtectedRoute path="/host-property" component={HostFormContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
    </div>
  )
}

export default App;
