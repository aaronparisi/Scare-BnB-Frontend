import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  TodayButton,
  WeekView,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

// import { appointments } from '../../../demo-data/month-appointments';

const ExternalViewSwitcher = ({
  currentViewName,
  onChange,
}) => (
  <RadioGroup
    aria-label="Views"
    style={{ flexDirection: 'row' }}
    name="views"
    value={currentViewName}
    onChange={onChange}
  >
    <FormControlLabel value="Week" control={<Radio />} label="Week" />
    <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
    <FormControlLabel value="Month" control={<Radio />} label="Month" />
  </RadioGroup>
);

class GuestProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: appointments,
      currentViewName: 'Month',
    };

    this.currentViewNameChange = (e) => {
      this.setState({ currentViewName: e.target.value });
    };
  }

  render() {
    return (
      <div className="user-profile">
        <h1>{this.props.user.username}</h1>
        <img src={`https://springfieldbnb.s3.amazonaws.com/avatars/${this.props.user.username}.png`} alt={this.props.user.username}/>
  
        {/* <ul className="bookings-list">
          {this.props.bookings.map((booking, idx) => {
            return (
              <li className="booking-list-item" key={idx}>
                <Link to={`/bookings/${booking.id}`} >
                  {booking.title}
                </Link>
              </li>
            )
          })}
        </ul> */}
  
          <h2>Guest Rating</h2>
          <p>{this.props.user.guest_rating}</p>

        <h2>Bookings</h2>
        {/* <ExternalViewSwitcher
          currentViewName={this.state.currentViewName}
          onChange={this.currentViewNameChange}
        /> */}

        <Paper>
          <Scheduler
            data={this.props.bookings}
            // data={[
            //   { title: 'test-booking', startDate: new Date(2021, 2, 10), endDate: new Date(2021, 2, 11) }
            // ]}
            height={660}
          >
            <ViewState
              defaultCurrentDate={new Date().toJSON().slice(0, 10)}
              currentViewName={this.state.currentViewName}
            />
            <WeekView
              startDayHour={10}
              endDayHour={19}
            />
            <WeekView
              name="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />

            <Toolbar />
            <DateNavigator />
            <TodayButton />

            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    )
  }
}

export default withRouter(GuestProfile)