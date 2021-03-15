import { connect } from 'react-redux';
import ManagerProfile from './ManagerProfile'
import { addManagerRating, updateManagerRating, fetchManager } from '../../actions/manager_actions'

const mapStateToProps = (state, ownProps) => {
  // // ! this is ugly
  // const manager = Object.values(state.properties).filter(prop => {
  //   return prop.manager.id === parseInt(ownProps.match.params[0])
  // })[0].manager
  
  return {
    manager: state.manager,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addManagerRating: (managerId, guestId, newRating) => dispatch(addManagerRating(managerId, guestId, newRating)),
    updateManagerRating: (managerId, guestId, newRating) => dispatch(updateManagerRating(managerId, guestId, newRating)),
    fetchManager: managerId => dispatch(fetchManager(managerId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerProfile)