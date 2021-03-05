import { connect } from 'react-redux'
import FullListing from './FullListing'

const mapStateToProps = (state, ownProps) => {
  return {
    property: state.properties[parseInt(ownProps.match.params[0])]
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullListing)