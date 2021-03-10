import React from 'react'
import 'flatpickr/dist/themes/airbnb.css'
import Flatpickr from 'react-flatpickr'

class CustomDate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Flatpickr
        name="start_date"
        id="start_date"
        value={this.state.startDate}
        // onChange={e => this.setState({ startDate: e.currentTarget.value })}
        options={
          { minDate:  new Date().toJSON().slice(0, 10) }
        }
      />
    )
  }
}

export default CustomDate