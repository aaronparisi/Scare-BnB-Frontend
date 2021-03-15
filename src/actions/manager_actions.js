import * as managerApiUtil from '../utils/manager_util'

export const RECEIVE_MANAGER = "RECEIVE_MANAGER"

export const receiveManager = manager => {
  return {
    type: RECEIVE_MANAGER,
    manager: manager
  }
}

export const fetchManager = managerId => dispatch => {
  return managerApiUtil.fetchManager(managerId)
  .then(info => {
    dispatch(receiveManager(info.data))
  })
}

export const addManagerRating = (managerId, guestId, newRating) => dispatch => {
  return managerApiUtil.addManagerRating(managerId, guestId, newRating)
  .then(info => {
    dispatch(receiveManager(info.data))
  })
}

// todo change manager rating, delete it??