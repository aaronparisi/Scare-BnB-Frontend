import { RECEIVE_NOTICES, RECEIVE_ERRORS } from '../actions/notices_actions'

const _emptyNotices = {
  notices: {},
  errors: {}
}

const noticesReducer = (state = _emptyNotices, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_NOTICES:
      return Object.assign({}, state, { notices: action.notices })
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors })
    default:
      return _emptyNotices;  // * default is to clear this out
  }
}

export default noticesReducer