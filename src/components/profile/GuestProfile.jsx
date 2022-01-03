import React from 'react'
import { history } from '../../index'

import Paper from '@material-ui/core/Paper';

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


class GuestProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: appointments,
      currentViewName: 'Month',
      avatar: null
    };

    this.currentViewNameChange = (e) => {
      this.setState({ currentViewName: e.target.value });
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
  }

  deleteAccount(e) {
    e.preventDefault()

    this.props.deleteUser(this.props.user.id)
    .then(() => history.push('/signup'))
  }

  async handleSubmit(e) {
    // submissio of avatar update form
    e.preventDefault();

    const guestInfo = new FormData();
    guestInfo.append(
      "user[avatar]",
      this.state.avatar
    )

    this.props.deleteUserAvatar(this.props.user.id)
    .then(data => {
      return this.props.addUserAvatar(this.props.user.id, guestInfo)
    })
    .then(userData => {
      // we no longer have to update an aws url for the user
      // but we do have to receive the user with its new avatar url
      // ... there's probably a way to do this without overwriting the entire user...
      this.props.receiveCurrentUser(userData)
    })

    e.currentTarget.value = null
  }

  MyComponent({ children, ...restProps}) {
    return (
      <Appointments.Appointment 
        {...restProps}
        onClick={() => history.push(`/bookings/${restProps.data.id}`)}
      >
        {children}
      </Appointments.Appointment>
    )
  }

  render() {
    return (
      <div className="user-profile">
        <h1>{this.props.user.username}</h1>
        <img src={this.props.user.avatar_url} alt={this.props.user.username}/>

        <form
          className="mini-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <fieldset>
            <legend>Upload a new photo!</legend>
            <input type="file" name="thumbnail" id="thumbnail" onChange={e => this.setState({ avatar: e.currentTarget.files[0]})}/>

            <input type="submit" value="Upload Photo!"/>
          </fieldset>
        </form>
  
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

            <Appointments appointmentComponent={this.MyComponent} />
          </Scheduler>
        </Paper>

        <button
          onClick={e => this.deleteAccount(e)}
        >
          Delete Account!
        </button>
      </div>
    )
  }
}

export default GuestProfile