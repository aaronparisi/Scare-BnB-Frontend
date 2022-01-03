import React from 'react'

class Carousel extends React.Component {

  render() {
    //console.log(this.state.imgKeys)
    
    return (
      <ul className="carousel">
        {this.props.property.image_urls.map((img_url, idx) => {
          return (
            <li className="carousel-box" key={idx}>
              <img
                src={img_url}
                alt={`${this.props.property.title}`}
                className="property-thumbnail"
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Carousel