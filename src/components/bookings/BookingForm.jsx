import React from 'react'
import bookText from '../../images/fontImages/book.png'

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
    return (
      <div className="booking-form-parent">
        <div className="app-form booking-form-container">
        
        </div>
        
        {/* <img className="form-title" src={bookText} alt="Book A Stay"/> */}
        <form className="booking-form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="start_date">Start Date</label>
          <input 
            type="date" 
            name="start_date" 
            id="start_date"
            value={this.state.startDate}
            onChange={e => this.setState({ startDate: e.currentTarget.value })}
          />
  
          <label htmlFor="end_date">End Date</label>
          <input 
            type="date" 
            name="end_date" 
            id="end_date"
            value={this.state.endDate}
            onChange={e => this.setState({ endDate: e.currentTarget.value })}
          />
  
          <input type="submit" value="Book your stay!"/>
        </form>
      </div>
    )
  }

}

export default BookingForm