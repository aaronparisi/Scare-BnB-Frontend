import React from 'react'
import { getAllObjectKeysInFolder, getImageUrlFromStream } from '../../utils/aws_util'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // imgUrls: []
      imgKeys: []
    }

    this.processKeys = this.processKeys.bind(this)
  }

  processKeys(objKeys) {
    const objUrls = objKeys.map(objKey => {
      return getImageUrlFromStream(objKey)
      .then(url => {
        return url
      })
    })
    
    const newUrls = this.state.imgUrls.concat(objUrls)
    this.setState({ imgUrls: newUrls })
  }

  // componentDidMount() {
  //   getAllObjectKeysInFolder(
  //     this
  //       .props
  //       .property
  //       .image_directory.split('').slice(1).join('')  // remove the leading '/'
  //   )
  //   .then(objKeys => {
  //     this.setState({ imgKeys: objKeys })
  //   })
  // }

  render() {
    //console.log(this.state.imgKeys)
    
    return (
      <ul className="carousel">
        {this.props.property.image_urls.map((img_url, idx) => {
          return (
            <li className="carousel-box" key={idx}>
              <img
                src={img_url}
                alt={`image of ${this.props.property.title}`}
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

// s3://springfieldbnb/users/Frankie_the_Squealer/