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

  componentDidMount() {
    getAllObjectKeysInFolder(`users/${this.props.managerId}/properties/${this.props.property.title}`)
    .then(objKeys => {
      this.setState({ imgKeys: objKeys })
    })
  }
  
  render() {
    
    return (
      <ul className="carousel">
        {this.state.imgKeys.map((imgKey, idx) => {
          return (
            <li className="carousel-box" key={idx}>
              <img
                src={`https://springfieldbnb.s3.amazonaws.com/${imgKey}`}
                // src={imgSrc}
                alt={imgKey}
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