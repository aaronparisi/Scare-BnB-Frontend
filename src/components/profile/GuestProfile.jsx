import React from 'react'
import { history } from '../../index'

import Paper from '@material-ui/core/Paper';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
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
import { deletePhoto, getAvatarKey, uploadPhoto } from '../../utils/aws_util';

import keys from '../../keys';

// import { appointments } from '../../../demo-data/month-appointments';

// const ExternalViewSwitcher = ({
//   currentViewName,
//   onChange,
// }) => (
//   <RadioGroup
//     aria-label="Views"
//     style={{ flexDirection: 'row' }}
//     name="views"
//     value={currentViewName}
//     onChange={onChange}
//   >
//     <FormControlLabel value="Week" control={<Radio />} label="Week" />
//     <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
//     <FormControlLabel value="Month" control={<Radio />} label="Month" />
//   </RadioGroup>
// );

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

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault();

    deletePhoto({
      user: this.props.user,
      dirName: `users/${this.props.user.id-1}/avatar`,
      accessKey: keys.access,
      secretKey: keys.secret,
      event: e,
      toDelete: this.props.user.image_url.split('/').slice(-1)[0]
    })
    .then(data => {
      uploadPhoto({
        dirName: `users/${this.props.user.id-1}/avatar`,
        accessKey: keys.access,
        secretKey: keys.secret,
        file: e.currentTarget.elements[1].files[0]
      })
    })
    .then(data => {
      this.props.setCurrentUserAvatar(this.props.user.id, data.key)
    })

    e.currentTarget.value = null

    // const config = {
    //   bucketName: 'springfieldbnb',
    //   dirName: `users/${this.props.user.id-1}/avatar`,
    //   region: 'us-west-2',
    //   accessKeyId: keys.access,
    //   secretAccessKey: keys.secret
    // }

    // const newFile = e.currentTarget.elements[1].files[0]
    // e.currentTarget.value = null

    // S3FileUpload.deleteFile(this.props.user.image_url.split('/').slice(-1)[0], config)
    // .then(data => {
    //   return S3FileUpload.uploadFile(newFile, config)
    //   // addObject(newFile, `users/${this.props.user.id-1}/avatar/`)
    // })
    // .then(data => {
    //   this.props.setCurrentUserAvatar(this.props.user.id, data.key)
    // })
    // .catch(err => {
    //   console.log(`error uploading new avatar`)
    // })
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
        <img src={`https://springfieldbnb.s3.amazonaws.com/${this.props.user.image_url}`} alt={this.props.user.username}/>

        <form
          className="mini-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <fieldset>
            <legend>Upload a new photo!</legend>
            <input type="file" name="thumbnail" id="thumbnail"/>

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
      </div>
    )
  }
}

export default GuestProfile