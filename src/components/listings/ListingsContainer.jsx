import { connect } from 'react-redux'
import { getProperties } from '../../actions/properties_actions'
import Listings from './Listings'

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProperties: criteria => dispatch(getProperties(criteria))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)