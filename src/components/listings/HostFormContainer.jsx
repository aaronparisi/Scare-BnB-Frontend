import { connect } from 'react-redux'
import { postAddress, postProperty } from '../../actions/properties_actions'
import HostForm from './HostForm'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postProperty: property => dispatch(postProperty(property)),
    postAddress: address => dispatch(postAddress(address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostForm)