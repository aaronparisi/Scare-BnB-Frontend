import { connect } from 'react-redux'
import Listings from './Listings'

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)