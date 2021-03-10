import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import 'flatpickr/dist/themes/airbnb.css'
import Flatpickr from 'react-flatpickr'
import bookText from '../../images/fontImages/book.png'
import { history } from '../../index' // ! where do I save this?

class BookingForm extends React.Component {
  constructor(props) {
    super(props)

    const today = new Date().toJSON().slice(0, 10);
    let tomorrow = new Date();
    tomorrow = new Date(tomorrow.setDate(tomorrow.getDate()+1))
    tomorrow = tomorrow.toJSON().slice(0, 10)

    this.state = {
      startDate: null,
      endDate: null,
      endDatePossibilities: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateStartDate = this.updateStartDate.bind(this)
  }

  componentDidMount() {
    console.log('getting bookings by property')
    this.props.getBookingsByProperty(parseInt(this.props.match.params[0]) + 1)
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
    .then(madeBooking => {
      history.push(`/bookings/${madeBooking.data.id}`)  // can I just remove the 'book-me' part of the url?
    })
  }

  updateStartDate(startDate) {
    let newStart = new Date(startDate).toJSON().slice(0, 10)
    let newEndDatePoss = [];

    let curDate = new Date(newStart);
      
    while (
      ! this.props.conflictDates.includes(curDate.toJSON().slice(0, 10)) &&
      newEndDatePoss.length <= 30  // limit stay to 30 days??
    ) {
      newEndDatePoss.push(new Date(curDate).toJSON().slice(0, 10))

      const newDate = curDate.setDate(curDate.getDate()+1)
      curDate = new Date(newDate)
    }
    
    this.setState({ 
      endDatePossibilities: newEndDatePoss,
      startDate: newStart
    })
  }

  render() {
    const { startDate } = this.state
    const { endDate } = this.state
    
    return (
      <div className="booking-form-parent">
        <div className="app-form booking-form-container">

        </div>

        <Link 
          to={`/properties/${this.props.match.params[0]}`} 
          className="close-form-button"
        >
          X
        </Link>
        
        <form className="booking-form" onSubmit={e => this.handleSubmit(e)}>
          <img className="form-title" src={bookText} alt="Book A Stay"/>

          <label htmlFor="start_date">Start Date</label>
          <Flatpickr
            name="start_date"
            id="start_date"
            value={startDate}
            onChange={startDate => {
              this.updateStartDate(startDate)
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
              { enable: this.state.endDatePossibilities }
            }
          />
  
          <input type="submit" value="Book your stay!"/>
        </form>
      </div>
    )
  }

}

export default withRouter(BookingForm)