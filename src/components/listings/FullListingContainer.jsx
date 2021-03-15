import { connect } from 'react-redux'
import { fetchManager } from '../../actions/manager_actions'
import FullListing from './FullListing'


const mapStateToProps = (state, ownProps) => {
  const idx = parseInt(ownProps.match.params[0])
  const property = state.properties[idx]

  return {
    property: property,
    manager: state.manager
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchManager: managerId => dispatch(fetchManager(managerId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullListing)