import { connect } from 'react-redux'
import FullListing from './FullListing'
import { extractCurrentProperty } from '../../actions/properties_actions'

const mapStateToProps = (state, ownProps) => {
  // const idx = parseInt(ownProps.match.params[0].split('/')[2])
  const idx = parseInt(ownProps.match.params[0])
  return {
    property: state.properties[idx]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullListing)