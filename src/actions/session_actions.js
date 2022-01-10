import * as sessionApiUtil from '../utils/session_util'
import { history } from '../index' // ! where do I save this?
import { getProperties } from './properties_actions'
import { getBookingsByUser } from './booking_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_MADE_MANAGER_RATINGS = 'RECEIVE_MADE_MANAGER_RATINGS'
export const RECEIVE_CURRENT_USER_AVATAR = 'RECEIVE_CURRENT_USER_AVATAR'

export const receiveMadeManagerRatings = toAdd => {
  return {
    type: RECEIVE_MADE_MANAGER_RATINGS,
    toAdd
  }
}

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveCurrentUserAvatar = url => {
  return {
    type: RECEIVE_CURRENT_USER_AVATAR,
    imageUrl: url
  }
}

// thunk stuff - will be exported to containers

export const setCurrentUserAvatar = (id, url) => dispatch => {
  sessionApiUtil.changeUserImageUrl(id, url)
  .then(data => {
    dispatch(receiveCurrentUserAvatar(url))
  })
}

export const createNewUser = formUser => dispatch => {
  return sessionApiUtil.postUser(formUser)
  .then(
    newUser => {
      dispatch(receiveCurrentUser(newUser.data))
      getProperties()
    },
    err => {
      return Promise.reject(err)
    }
  )
}

export const login = formUser => dispatch => {
  return sessionApiUtil.postSession(formUser)
  .then(curUser => {
      dispatch(receiveCurrentUser(curUser.data))
      return curUser
    }
  )
  .then(curUser => {
    dispatch(getBookingsByUser(curUser.data.id))
  })
  .then(() => {
    history.push('/listings')
  })
}

export const logout = () => dispatch => {
  console.log('about to log out')
  return sessionApiUtil.deleteSession()
  .then(
    logoutMsg => {  // does the msg from sessions controller even get returned?
      console.log(`returned from delete api call with message: ${logoutMsg}`)
      dispatch(logoutCurrentUser())
      history.push('/login')
      return null
    },
    err => {
      console.log('error with api delete')
      console.log(err)
    }
  )
}

export const fetchCurrentUser = () => dispatch => {
  return sessionApiUtil.getCurrentUser()
  .then(
    currentUser => {
      if (currentUser && currentUser.data !== '') {  // issue in prod where it tries reading data of undefined?
        dispatch(receiveCurrentUser(currentUser.data))
      }
      
      return currentUser
    },
    err => {
      console.log(`error fetching current user: ${err}`)
    }
  )
}

export const deleteUser = userId => dispatch => {
  return dispatch(logout())
  .then(() => {
    sessionApiUtil.deleteUser(userId)
  })
  .catch(err => {
    console.log('err deleting user')
  })
}