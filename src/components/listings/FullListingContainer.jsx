import { connect } from 'react-redux'
import FullListing from './FullListing'
import { extractCurrentProperty } from '../../actions/properties_actions'

const mapStateToProps = (state, ownProps) => {
  const idx = parseInt(ownProps.match.params[0])
  const property = state.properties[idx]
  return {
    property: property
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullListing)