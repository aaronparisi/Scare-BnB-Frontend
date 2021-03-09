export const RECEIVE_NOTICES = 'RECEIVE_NOTICES'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  }
}

export const receiveNotices = notices => {
  return {
    type: RECEIVE_NOTICES,
    notices: notices
  }
}