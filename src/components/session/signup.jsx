import React from 'react'
import signupText from '../../images/fontImages/signup.png'

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this)
  }
  
  handleInput(e, type) {
    this.setState({
      [type]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.createNewUser(this.state)
  }

  render() {
    return (
      <div className="session-form">
        <img className="form-title" src={signupText} alt="login"/>
        <form
          onSubmit={e => this.handleSubmit(e)}
        >
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            value={this.state.username}
            id="username"
            placeholder="Username"
            onChange={e => this.handleInput(e, "username")}
          />

          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            value={this.state.email}
            id="email"
            placeholder="Email"
            onChange={e => this.handleInput(e, "email")}
          />

          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            value={this.state.password}
            id="password"
            placeholder="Password"
            onChange={e => this.handleInput(e, "password")}
          />

          <input
            type="submit"
            value="Sign Up!"
          />
        </form>
      </div>
    )
  }
}

export default Signup