import React from 'react'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.DeleteButton = this.DeleteButton.bind(this)
  }

  DeleteButton = ({ img_id, path }) => {
    if (path.includes('manage')) {
      return (
        <button 
          onClick={e => {
            this.props.deletePropertyImage(this.props.property.id, img_id)
          }}
        >
          delete me!
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    //console.log(this.state.imgKeys)
    
    return (
      <ul className="carousel">
        {this.props.property.image_urls.map((img_url, idx) => {
          return (
            <li className="carousel-box" key={idx}>
              <img
                src={img_url.url}
                alt={`${this.props.property.title}`}
                className="property-thumbnail"
              />
              <this.DeleteButton img_id={img_url.id} path={window.location.pathname} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Carousel