import { connect } from 'react-redux'
import Carousel from './Carousel'

const mapStateToProps = (state, ownProps) => {
  return {
    managerId: state.properties.filter(prop => prop.id === ownProps.propertyId)[0].manager_id-1
    // we need manager id less 1 because s3 bucket is 0 indexed
  }
}

export default connect(mapStateToProps, null)(Carousel)