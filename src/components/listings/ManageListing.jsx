import React from 'react'
import { useEffect } from 'react'
import { history } from '../..'
import { deleteFolder } from '../../utils/aws_util'

const ManageListing = props => {
  useEffect(() => {
    props.getBookingsByProperty(parseInt(props.match.params[0]))
  }, [])

  const handleDelete = e => {
    // deleteFolder(props.property.image_directory.slice(0, props.property.image_directory.length - 1))
    // thought i had to remove trailing slash to resolve 204 no content, but didn't change anything
    deleteFolder(props.property.image_directory)
    .then(() => {
      props.deleteProperty(props.property.id)
    })
    .then(deletedProp => {
      history.push('/listings')
    })
    .catch(err => {
      console.log('error handling delete')
    })
  }

  if (props.property === undefined) {
    // * I don't think this is necessary because of the managed bool route...
    return <React.Fragment >
      <p>This property does not exist</p>
    </React.Fragment>
  }

  return (
    <React.Fragment >
      <h1>{props.property.title}</h1>
      
      <p>There are {props.bookings.length} bookings for this property</p>

      <button
        onClick={e => handleDelete(e)}
      >
        Delete Property!
      </button>
    </React.Fragment>
  )
}

export default ManageListing