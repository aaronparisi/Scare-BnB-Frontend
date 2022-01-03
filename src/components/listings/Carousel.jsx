import React from 'react'

const Carousel = props => {
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

  return (
    <ul className="carousel">
      {props.property.image_urls.map((img_url, idx) => {
        return (
          <li className="carousel-box" key={idx}>
            <img
              src={img_url.url}
              alt={`${props.property.title}`}
              className="property-thumbnail"
            />
            <DeleteButton img_id={img_url.id} path={window.location.pathname} />
          </li>
        )
      })}
    </ul>
  )
}

export default Carousel