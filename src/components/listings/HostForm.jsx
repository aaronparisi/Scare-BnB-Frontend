import React, { useState } from 'react'
import hostYourProperty from '../../images/fontImages/host_your_property.png'
import { history } from '../../index'
import { createFolder, uploadPhoto } from '../../utils/aws_util'
import keys from '../../keys'

const HostForm = props => {

  const [title, setTitle] = useState("Legitimate Businessman's Social Club")
  const [description, setDescription] = useState('A place for legititimage businessmen to socialize')
  const [beds, setBeds] = useState('0')
  const [baths, setBaths] = useState('1')
  const [squareFeet, setSquareFeet] = useState('1500')
  const [smoking, setSmoking] = useState(true)
  const [pets, setPets] = useState(true)
  const [nightlyRate, setNightlyRate] = useState(650)

  const [line1, setLine1] = useState('123 Fake Street')
  const [line2, setLine2] = useState('')
  const [city, setCity] = useState('Springfield')
  const [state, setState] = useState('North Takoma')
  const [zip, setZip] = useState('192005')

  const handleSubmit = e => {
    e.preventDefault()

    createFolder(`users/${props.user.username}/properties/${title.split(" ").join("_")}`)
    .then(folder => (
      uploadPhoto({
        dirName: `users/${props.user.username}/properties/${title.split(" ").join("_")}`,
        accessKey: keys.access,
        secretKey: keys.secret,
        file: e.currentTarget.elements["thumbnail"].files[0]
      })
    ))
    .then(data => {
      // ? anything to do here??
    })

    const propInfo = {
      title: title,
      description: description,
      beds: beds,
      baths: baths,
      square_feet: squareFeet,
      smoking: smoking,
      pets: pets,
      nightly_rate: nightlyRate,
      manager_id: props.user.id,
      image_directory: `/users/${props.user.username}/properties/${title}/`
    }

    props.postProperty(propInfo)
    .then(property => {
      const addressInfo = {
        line_1: line1,
        line_2: line2,
        city: city,
        state: state,
        zip: zip,
        property_id: property.data.id
      }
      return props.postAddress(addressInfo)
    })
    .then(address => {
      history.push('/listings')
    })
    .catch(err => {
      console.log('error posting property and/or address')
    })
  }

  return (
    <div className="app-form">
      <img src={hostYourProperty} alt="Host your property" className="form-title"/>
      <form
        onSubmit={e => handleSubmit(e)}
      >
        <input
          type="text" 
          name="title" 
          id="title"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
          placeholder="Title"
        />

        <input
          type="text" 
          name="description" 
          id="description"
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
          placeholder="Description"
        />

        <fieldset>
          <legend>Address</legend>
          <input 
            type="text" 
            name="line1" 
            id="line1"
            value={line1}
            onChange={e => setLine1(e.currentTarget.value)}
            placeholder="Line 1"
          />
          <input 
            type="text" 
            name="line2" 
            id="line2"
            value={line2}
            onChange={e => setLine2(e.currentTarget.value)}
            placeholder="Line 2"
          />
          <select 
            name="city" 
            id="city"
            value={city}
            onChange={e => setCity(e.currentTarget.value)}
            placeholder="City"
            required
          >
            <option value="" disabled selected>City</option>
            <option value="Springfield">Springfield</option>
          </select>
          <select 
            name="state" 
            id="state"
            value={state}
            onChange={e => setState(e.currentTarget.value)}
            placeholder="State"
            required
          >
            <option value="" disabled selected>State</option>
            <option value="Springfield">North Takoma</option>
          </select>
          <select 
            name="zip" 
            id="zip"
            value={zip}
            onChange={e => setZip(e.currentTarget.value)}
            placeholder="Zip"
            required
          >
            <option value="" disabled selected>Zip</option>
            <option value="Springfield">192005</option>
          </select>
        </fieldset>

        <input
          type="number" 
          name="beds" 
          id="beds"
          value={beds}
          onChange={e => setBeds(e.currentTarget.value)}
          placeholder="Beds"
        />

        <input
          type="number" 
          name="baths" 
          id="baths"
          value={baths}
          onChange={e => setBaths(e.currentTarget.value)}
          placeholder="Baths"
        />

        <input
          type="number" 
          name="squareFeet" 
          id="squareFeet"
          value={squareFeet}
          onChange={e => setSquareFeet(e.currentTarget.value)}
          step="100"
          placeholder="Square Feet"
        />

        <select 
          name="smoking" 
          id="smoking"
          value={smoking}
          onChange={e => setSmoking(e.currentTarget.value)}
          placeholder="Smoking"
          required
        >
          <option value="" disabled selected>Select Smoking Policy</option>
          <option value={true}>Smoking</option>
          <option value={false}>Non Smoking</option>
        </select>

        <select 
          name="pets" 
          id="pets"
          value={pets}
          onChange={e => setPets(e.currentTarget.value)}
          placeholder="Pets"
          required
        >
          <option value='' disabled selected>Select Pet Policy</option>
          <option value={true}>Pets</option>
          <option value={false}>No Pets</option>
        </select>

        <input 
          type="number"
          name="nightlyRate"
          id="nightlyRate"
          value={nightlyRate}
          onChange={e => setNightlyRate(e.currentTarget.value)}
          placeholder="Nightly Rate"
          step="25"
          min="0.00"
        />

        <fieldset>
          <legend>Upload a photo!</legend>
          <input type="file" name="thumbnail" id="thumbnail"/>
        </fieldset>

        <input type="submit" value="Host your property!"/>
      </form>
    </div>
  )
}

export default HostForm