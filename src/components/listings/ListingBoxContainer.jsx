import { connect } from 'react-redux'
import ListingBox from './ListingBox'

const mapStateToProps = (state, ownProps) => {
  return {
    property: ownProps.property
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingBox)