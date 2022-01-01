import React, { useState } from 'react'
import hostYourProperty from '../../images/fontImages/host_your_property.png'
import { history } from '../../index'
import { addObject, createFolder, uploadPhoto } from '../../utils/aws_util'
//import keys from '../../keys'

const HostForm = props => {

  const [title, setTitle] = useState("Legitimate Businessman's Social Club")
  const [description, setDescription] = useState('A place for legititimage businessmen to socialize')
  const [beds, setBeds] = useState('0')
  const [baths, setBaths] = useState('1')
  const [squareFeet, setSquareFeet] = useState('1500')
  const [smoking, setSmoking] = useState("default")
  const [pets, setPets] = useState("default")
  const [nightlyRate, setNightlyRate] = useState(650)

  const [line1, setLine1] = useState('123 Fake Street')
  const [line2, setLine2] = useState('')
  const [city, setCity] = useState('Springfield')
  const [state, setState] = useState('North Takoma')
  const [zip, setZip] = useState('192005')

  const [images, setImages] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    const propInfo = new FormData();
    // const images = e.target.elements["images"].files;

    propInfo.append(
      "property[title]",
      title
    )
    propInfo.append(
      "property[description]",
      description
    )
    propInfo.append(
      "property[beds]",
      beds
    )
    propInfo.append(
      "property[baths]",
      baths
    )
    propInfo.append(
      "property[square_feet]",
      squareFeet
    )
    propInfo.append(
      "property[smoking]",
      smoking
    )
    propInfo.append(
      "property[pets]",
      pets
    )
    propInfo.append(
      "property[nightly_rate]",
      nightlyRate
    )
    propInfo.append(
      "property[manager_id]",
      props.user.id
    )
    for (let i=0; i < images.length; i++) {
      propInfo.append(
        "property[images][]",
        images[i]
      )
    };
    
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
            <option value="default" disabled hidden>City</option>
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
            <option value="default" disabled hidden>State</option>
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
            <option value="default" disabled hidden>Zip</option>
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
          <option value="default" disabled hidden>Select Smoking Policy</option>
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
          <option value="default" disabled hidden>Select Pet Policy</option>
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
          <ul>
            { Array.from(images).map((img, i) => <li key={i}>{img.filename}</li>) }
          </ul>
          <input 
            type="file" 
            name="images" 
            id="images" 
            multiple
            onChange={e => {
              setImages(e.currentTarget.files)
            }}
          />
        </fieldset>

        <input type="submit" value="Host your property!"/>
      </form>
    </div>
  )
}

export default HostForm