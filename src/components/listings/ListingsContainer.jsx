import { connect } from 'react-redux'
import { getProperties } from '../../actions/properties_actions'
import Listings from './Listings'

const mapStateToProps = (state, ownProps) => {
  let properties = Object.values(state.properties)

  if (Object.keys(ownProps.match.params).length !== 0) {
    // we are only showing a subset of listings
    properties = properties.filter(prop => prop.manager_id === parseInt(ownProps.match.params[0]))
  }
  
  return {
    properties: properties
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProperties: criteria => dispatch(getProperties(criteria))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)