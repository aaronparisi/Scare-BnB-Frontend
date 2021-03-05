import { connect } from 'react-redux'
import ListingBox from './ListingBox'

const mapStateToProps = state => {
  return {
  
  }
  // * nothing goes here because we aren't pulling it from state, it's being passed in......
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingBox)