import * as managerApiUtil from '../utils/manager_util'
import { addMadeManagerRating } from './session_actions'

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
    dispatch(addMadeManagerRating(info.data))
  })
}

export const updateManagerRating = (managerId, guestId, newRating) => dispatch => {
  return managerApiUtil.updateManagerRating(managerId, guestId, newRating)
  .then(info => {
    dispatch(receiveManager(info.data))
    dispatch(addMadeManagerRating(info.data))
  })
}

// todo change manager rating, delete it??