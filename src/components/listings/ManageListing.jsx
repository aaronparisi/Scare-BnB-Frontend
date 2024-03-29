import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { history } from '../..'

const ManageListing = props => {
  const [images, setImages] = useState([])

  useEffect(() => {
    props.getBookingsByProperty(parseInt(props.match.params[0]))
  }, [])

  const ref = useRef()

  const handleDelete = e => {
    // deleteFolder(props.property.image_directory.slice(0, props.property.image_directory.length - 1))
    // thought i had to remove trailing slash to resolve 204 no content, but didn't change anything
    props.deleteProperty(props.property.id)
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

  const handleSubmit = e => {
    e.preventDefault()

    const imageInfo = new FormData()

    for (let i=0; i < images.length; i++) {
      imageInfo.append(
        "property[images][]",
        images[i]
      )
    };

    ref.current.value = "";  // reset file input
    setImages([])
    
    props.addPropertyImage(props.property.id, imageInfo)
    .then(data => {
      // redirect or something?
    })
  }
  
  return (
    <React.Fragment >
      <h1>{props.property.title}</h1>
      
      <p>There are {props.bookings.length} bookings for this property</p>

      <form onSubmit={e => handleSubmit(e)}>
        <fieldset>
            <legend>Upload a photo!</legend>
            <ul>
              { Array.from(images).map((img, i) => <li key={i}>{img.name}</li>) }
            </ul>
            <input 
              type="file" 
              name="images" 
              id="images"
              ref={ref}
              onChange={e => {
                setImages(e.currentTarget.files.length === 0 ? [] : [...images, e.currentTarget.files[0]])
              }}
            />
          </fieldset>
          <input type="submit" value="Submit Images!" disabled={images.length < 1} />
      </form>

      <button
        onClick={e => handleDelete(e)}
      >
        Delete Property!
      </button>
    </React.Fragment>
  )
}

export default ManageListing