import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, ADD_MADE_MANAGER_RATING } from '../actions/session_actions'

const _nullSession = {
  currentUser: null
}

const sessionsReducer = (state = _nullSession, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user})
    case LOGOUT_CURRENT_USER:
      return _nullSession
    case ADD_MADE_MANAGER_RATING:
      const newMMRs = state.currentUser.madeManagerRatings.slice()
      newMMRs.push(action.toAdd.madeRating)

      return Object.assign(
        {},
        state,
        {
          currentUser: { ...state.currentUser, madeManagerRatings: newMMRs }
        }
      )
    default:
      return state;
  }
}

export default sessionsReducer