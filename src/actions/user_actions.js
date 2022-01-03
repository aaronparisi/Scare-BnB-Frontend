import * as userApiUtils from '../utils/user_utils'
import { receiveMadeManagerRatings, receiveCurrentUser } from './session_actions'

export const deleteUserAvatar = userId => dispatch => {
  return userApiUtils.deleteUserAvatar(userId)
  .then(data => {
    dispatch(receiveCurrentUser(data))
    // todo this is not ideal for updates since we're going to have to
    // update the current user in redux immediately...
  })
}

export const addUserAvatar = (userId, guestInfo) => dispatch => {
  return userApiUtils.addUserAvatar(userId, guestInfo)
  .then(data => {
    dispatch(receiveCurrentUser(data))
  })
}

// ##############################################################################
// 
// 
// ooo. .oo.  .oo.    .oooo.   ooo. .oo.    .oooo.    .oooooooo  .ooooo.  oooo d8b
// `888P"Y88bP"Y88b  `P  )88b  `888P"Y88b  `P  )88b  888' `88b  d88' `88b `888""8P
//  888   888   888   .oP"888   888   888   .oP"888  888   888  888ooo888  888
//  888   888   888  d8(  888   888   888  d8(  888  `88bod8P'  888    .o  888
// o888o o888o o888o `Y888""8o o888o o888o `Y888""8o `8oooooo.  `Y8bod8P' d888b
//                                                   d"     YD
//                                                   "Y88888P'
// 
// ##############################################################################

export const RECEIVE_MANAGER = "RECEIVE_MANAGER"

export const receiveManager = manager => {
  return {
    type: RECEIVE_MANAGER,
    manager: manager
  }
}

export const fetchManager = managerId => dispatch => {
  return userApiUtils.fetchManager(managerId)
  .then(info => {
    dispatch(receiveManager(info.data))
    dispatch(receiveMadeManagerRatings(info.data))
  })
}

export const addManagerRating = (managerId, guestId, newRating) => dispatch => {
  return userApiUtils.addManagerRating(managerId, guestId, newRating)
  .then(info => {
    dispatch(receiveManager(info.data))
    dispatch(receiveMadeManagerRatings(info.data))
  })
}

export const updateManagerRating = (managerId, guestId, newRating) => dispatch => {
  return userApiUtils.updateManagerRating(managerId, guestId, newRating)
  .then(info => {
    dispatch(receiveManager(info.data))
    dispatch(receiveMadeManagerRatings(info.data))
  })
}

// todo change manager rating, delete it??

