import { connect } from 'react-redux'
import Carousel from './Carousel'

const mapStateToProps = (state, ownProps) => {
  return {
    managerId: state.properties[ownProps.propertyId-1].manager_id-1
    // we need prop id less 1 to get correct object in state
    // then we need manager id less 1 because s3 bucket is 0 indexed
  }
}

export default connect(mapStateToProps, null)(Carousel)