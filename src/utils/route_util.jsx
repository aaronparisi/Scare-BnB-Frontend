import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  let thisProp = state.properties.filter(prop => prop.id === parseInt(ownProps.location.pathname.split("/")[2]))[0]
  let thisUser = state.session.currentUser

  return {
    loggedIn: Boolean(state.session.currentUser),
    thisLoggedIn: (thisUser === null) ? false : Boolean(state.session.currentUser.id === parseInt(ownProps.location.pathname.split("/")[2])),
    isManager: (thisProp === undefined) ? false : Boolean(state.session.currentUser.id === thisProp.manager_id)
  }
}

const ListingsRedirect = () => {
  return <Redirect to="/listings" />
}
const LoginRedirect = () => {
  return <Redirect to="/login" />
}

const CustomBool = ({ trueComponent: TrueComponent, falseComponent: FalseComponent, path, truthVal, exact  }) => {
  return (
    <Route path={path} exact={exact} render={(props) => {
      return truthVal ? (
        <TrueComponent {...props} />
      ) : (
        <FalseComponent {...props} />
      )
    }}/>
  )
}

const ThisLoggedInBool = ({ component: Component, path, thisLoggedIn, exact }) => {
  return CustomBool({ trueComponent: Component, falseComponent: ListingsRedirect, truthVal: thisLoggedIn, path, exact })
}

const ManagerBool = ({ component: Component, path, isManager, exact }) => {
  return CustomBool({ trueComponent: Component, falseComponent: ListingsRedirect, truthVal: isManager, path, exact })
}

const LoggedInBool = ({ trueComponent: TrueComponent, falseComponent: FalseComponent, path, loggedIn, exact }) => {
  return CustomBool({ trueComponent: TrueComponent, falseComponent: FalseComponent, truthVal: loggedIn, path, exact})
}

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return LoggedInBool({ trueComponent: ListingsRedirect, falseComponent: Component, path, loggedIn, exact })
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return LoggedInBool({ trueComponent: Component, falseComponent: LoginRedirect, path, loggedIn, exact })
}

export const CustomBoolRoute = withRouter(connect(null, null)(CustomBool))

export const ThisLoggedInBoolRoute = withRouter(connect(mapStateToProps)(ThisLoggedInBool))
export const ManagerBoolRoute = withRouter(connect(mapStateToProps)(ManagerBool))
export const LoggedInBoolRoute = withRouter(connect(mapStateToProps)(LoggedInBool))  // ? necessary?

// true component is a redirect, i.e. only accessible if logged OUT
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

// false component is a redirect, i.e. only accessible if logged IN
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))