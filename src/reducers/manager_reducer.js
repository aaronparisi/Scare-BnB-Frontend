import { RECEIVE_MANAGER } from '../actions/user_actions'

const _emptyManager = {

}

const managerReducer = (state = _emptyManager, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_MANAGER:
      return action.manager
    default:
      return state
  }
}

export default managerReducer