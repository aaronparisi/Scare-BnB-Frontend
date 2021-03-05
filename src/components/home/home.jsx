import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import springfieldHero from '../../images/heroes/Simpsons_cast.png'
// import welcomeHero from '../../images/heroes/welcome_to_springfield.jpg'
// import familyHero from '../../images/heroes/family.jpg'
import margeCouchHero from '../../images/heroes/marge-couch.jpg'
import tagline from '../../images/fontImages/tagline.png'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="home">
        <div className="hero-img-frame">
          <img className="hero-img" src={margeCouchHero} alt="marge on the couch"/>
          <Link to="/listings" className="logo-btn listings-link">
            <img src={tagline} alt="tagline"/>
          </Link>
        </div> 
      </div>
    )
  }
}

export default withRouter(Home)