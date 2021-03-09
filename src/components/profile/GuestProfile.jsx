import React from 'react'

const GuestProfile = props => {
  return (
    <div className="user-profile">
      <div>hello from guest profile</div>
      <div>You have {props.bookings.length} bookings</div>
    </div>
  )
}

export default GuestProfile