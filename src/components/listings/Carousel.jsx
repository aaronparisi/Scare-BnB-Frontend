import React, { useEffect, useState } from 'react'
import { exchangeImageIdForS3Url } from '../../utils/properties_util'

const Carousel = props => {

  const [redirectUrls, setRedirectUrls] = useState([])

  const mapper = () => {
    return Promise.all(props.property.image_urls.map(async imageInfo => {
      return exchangeImageIdForS3Url(imageInfo.id)
      .then(data => {
        return {
          url: data,
          id: imageInfo.id
        }
      })
      .catch(err => {
        console.log(err)
      })
    }))
  }

  useEffect(() => {
    mapper()
    .then(data => {
      setRedirectUrls(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []) // watch out for array equality issues...?

  const DeleteButton = ({ img_id, path }) => {
    if (path.includes('manage')) {
      return (
        <button 
          onClick={e => {
            props.deletePropertyImage(props.property.id, img_id)
          }}
        >
          delete me!
        </button>
      )
    } else {
      return null
    }
  }

  console.log('-----------  rendering carousel  -----------------')
  console.log(redirectUrls)
  return (
    <ul className="carousel">
      {redirectUrls.map((redirectUrl, idx) => {
        return (
          <li className="carousel-box" key={idx}>
            <img
              src={redirectUrl.url}
              alt={`${props.property.title}`}
              className="property-thumbnail"
            />
            <DeleteButton img_id={redirectUrl.id} path={window.location.pathname} />
          </li>
        )
      })}
    </ul>
  )
}

export default Carousel