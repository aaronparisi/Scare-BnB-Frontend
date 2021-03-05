import React from 'react'
import loginText from '../../images/fontImages/login.png'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Homer_Simpson',
      email: 'Homer_Simpson@springfieldbnb.com',
      password: 'password'
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

    this.props.login(this.state)
  }

  render() {
    return (
      <div className="session-form">
        <img className="form-title" src={loginText} alt="login"/>
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
            placeholder="password"
            onChange={e => this.handleInput(e, "password")}
          />

          <input
            type="submit"
            value="Log In!"
          />
        </form>
      </div>
    )
  }
}

export default Login