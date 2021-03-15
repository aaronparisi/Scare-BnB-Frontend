import { connect } from 'react-redux';
import ManagerProfile from './ManagerProfile'

const mapStateToProps = (state, ownProps) => {
  // ! this is ugly
  const manager = Object.values(state.properties).filter(prop => {
    return prop.manager.id === parseInt(ownProps.match.params[0])
  })[0].manager
  
  return {
    manager: manager
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerProfile)