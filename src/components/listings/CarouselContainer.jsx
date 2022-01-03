import { connect } from 'react-redux'
import Carousel from './Carousel'
import { deletePropertyImage } from '../../actions/properties_actions'

const mapStateToProps = (state, ownProps) => {
  const property = state.properties.filter(prop => prop.id === ownProps.propertyId)[0]
  const managerId = property.manager_id-1
  return {
    property: property,
    managerId: managerId
    // we need manager id less 1 because s3 bucket is 0 indexed
    // => todo this is not the case anymore, fix!!
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePropertyImage: (propId, imgId) => dispatch(deletePropertyImage(propId, imgId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)