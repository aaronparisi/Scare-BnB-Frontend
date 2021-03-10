import React from 'react'
import 'flatpickr/dist/themes/airbnb.css'
import Flatpickr from 'react-flatpickr'

class BookingForm extends React.Component {
  constructor(props) {
    super(props)

    const today = new Date().toJSON().slice(0, 10);
    let tomorrow = new Date();
    tomorrow = new Date(tomorrow.setDate(tomorrow.getDate()+1))
    tomorrow = tomorrow.toJSON().slice(0, 10)

    this.state = {
      startDate: today,
      endDate: tomorrow
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getBookingsByProperty(parseInt(this.props.match.params[0]))
  }

  handleSubmit(event) {
    event.preventDefault()
    
    this.props.postBooking({
      booking: {
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        guest_id: this.props.guestId,
        property_id: this.props.property.id
      }
    })
  }

  render() {
    const { startDate } = this.state
    const { endDate } = this.state
    
    return (
      <div className="booking-form-parent">
        <div className="app-form booking-form-container">
        
        </div>
        
        {/* <img className="form-title" src={bookText} alt="Book A Stay"/> */}
        <form className="booking-form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="start_date">Start Date</label>
          <Flatpickr
            name="start_date"
            id="start_date"
            value={startDate}
            onChange={startDate => {
              let newStart = new Date(startDate).toJSON().slice(0, 10)
              this.setState({ startDate: newStart })
            }}
            options={
              { minDate:  new Date().toJSON().slice(0, 10) },
              { disable: this.props.conflictDates }
            }
          />
  
          <label htmlFor="end_date">End Date</label>
          <Flatpickr
            name="end_date"
            id="end_date"
            value={endDate}
            onChange={endDate => {
              let newEnd = new Date(endDate).toJSON().slice(0, 10)
              this.setState({ endDate: newEnd })
            }}
            options={
              { minDate:  this.state.startDate + 1 },
              { disable: this.props.conflictDates }
            }
          />
  
          <input type="submit" value="Book your stay!"/>
        </form>
      </div>
    )
  }

}

export default BookingForm