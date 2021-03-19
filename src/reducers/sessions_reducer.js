import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER, 
  RECEIVE_MADE_MANAGER_RATINGS, 
  RECEIVE_CURRENT_USER_AVATAR 
} from '../actions/session_actions'

const _nullSession = {
  currentUser: null,
  madeRatings: []
}

const sessionsReducer = (state = _nullSession, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, 
        state, 
        { currentUser: action.user })
    case RECEIVE_CURRENT_USER_AVATAR:
      const user = Object.assign({}, state.currentUser)
      user['image_url'] = action.imageUrl
      return Object.assign(
        {},
        state,
        { currentUser: user }
      )
    case LOGOUT_CURRENT_USER:
      return _nullSession
    case RECEIVE_MADE_MANAGER_RATINGS:
      // const newRatings = state.madeRatings.slice()
      // action.toAdd.madeRatings.forEach(rating => {
      //   newRatings.push(rating)
      // });

      return Object.assign({}, state, { madeRatings: action.toAdd.madeRatings })
    default:
      return state;
  }
}

export default sessionsReducer