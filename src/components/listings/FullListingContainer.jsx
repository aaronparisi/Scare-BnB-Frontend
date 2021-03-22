import { connect } from 'react-redux'
import { fetchManager } from '../../actions/manager_actions'
import FullListing from './FullListing'


const mapStateToProps = (state, ownProps) => {
  const idx = parseInt(ownProps.match.params[0]) + 1
  const property = state.properties.filter(prop => prop.id === idx)[0]
  
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